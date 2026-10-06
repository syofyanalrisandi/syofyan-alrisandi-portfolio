/**
 * ECEK2 CAD - LinkedIn Edition Workspace Controller
 * Controls 3-Column LinkedIn Learning interface, 100 Real Technical Drawing PDFs with 3D Isometric Views,
 * category pill filter, search, specs inspector, and embedded PDF viewer.
 */

document.addEventListener('DOMContentLoaded', () => {
    // State
    let selectedDoc = window.REAL_PDF_COLLECTION[0];
    let searchQuery = '';
    let selectedCategory = 'all';

    // DOM Elements - Navbar
    const navbarSearchInput = document.getElementById('navbar-search-input');
    const btnTopDownload = document.getElementById('btn-top-download');
    const btnTopOpen = document.getElementById('btn-top-open');
    const btnTopPrint = document.getElementById('btn-top-print');

    // DOM Elements - Column 1 (Playlist)
    const pdfDocListContainer = document.getElementById('pdf-doc-list-container');
    const totalDocCounter = document.getElementById('total-doc-counter');
    const categoryPills = document.querySelectorAll('.pill-btn');

    // DOM Elements - Column 2 (Stage)
    const activeDocBadge = document.getElementById('active-doc-badge');
    const activeDocTitle = document.getElementById('active-doc-title');
    const activeDocSub = document.getElementById('active-doc-sub');
    const stageDrawingNo = document.getElementById('stage-drawing-no');
    const pdfFrame = document.getElementById('pdf-frame');

    // DOM Elements - Column 3 (Specs & Actions)
    const specsBodyContainer = document.getElementById('specs-body-container');
    const inventorGuideText = document.getElementById('inventor-guide-text');
    const btnDownloadPdf = document.getElementById('btn-download-pdf');
    const btnOpenTab = document.getElementById('btn-open-tab');
    const btnPrintDoc = document.getElementById('btn-print-doc');

    // Initialize View
    renderPlaylist();
    loadPdfDocument(selectedDoc);

    // Event Listeners - Search Input
    navbarSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderPlaylist();
    });

    // Event Listeners - Category Pills
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            selectedCategory = pill.getAttribute('data-category');
            renderPlaylist();
        });
    });

    // Event Listeners - Actions
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = selectedDoc.pdfPath;
        link.download = selectedDoc.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleOpenTab = () => {
        window.open(selectedDoc.pdfPath, '_blank');
    };

    const handlePrint = () => {
        try {
            if (pdfFrame.contentWindow) {
                pdfFrame.contentWindow.print();
            } else {
                window.print();
            }
        } catch {
            window.open(selectedDoc.pdfPath, '_blank');
        }
    };

    btnTopDownload.addEventListener('click', handleDownload);
    btnDownloadPdf.addEventListener('click', handleDownload);

    btnTopOpen.addEventListener('click', handleOpenTab);
    btnOpenTab.addEventListener('click', handleOpenTab);

    btnTopPrint.addEventListener('click', handlePrint);
    btnPrintDoc.addEventListener('click', handlePrint);

    // Render Playlist (Column 1)
    function renderPlaylist() {
        pdfDocListContainer.innerHTML = '';
        const filtered = window.REAL_PDF_COLLECTION.filter(doc => {
            const matchesCat = selectedCategory === 'all' || doc.category === selectedCategory;
            const matchesSearch = doc.title.toLowerCase().includes(searchQuery) ||
                                  doc.fileName.toLowerCase().includes(searchQuery) ||
                                  doc.id.toLowerCase().includes(searchQuery) ||
                                  doc.drawingNo.toLowerCase().includes(searchQuery) ||
                                  doc.category.toLowerCase().includes(searchQuery);
            return matchesCat && matchesSearch;
        });

        totalDocCounter.textContent = `${filtered.length} / ${window.REAL_PDF_COLLECTION.length}`;

        if (filtered.length === 0) {
            pdfDocListContainer.innerHTML = `
                <div style="padding: 2.5rem 1rem; text-align: center; color: rgba(0,0,0,0.5);">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="margin: 0 auto 8px; display: block; opacity: 0.6;">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <strong>Tidak ada gambar teknik yang cocok</strong>
                    <p style="font-size: 11.5px; margin-top: 4px;">Coba gunakan kata kunci pencarian yang lain.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(doc => {
            const item = document.createElement('div');
            item.className = `playlist-item ${doc.id === selectedDoc.id ? 'active' : ''}`;
            item.setAttribute('data-id', doc.id);

            item.innerHTML = `
                <div class="item-thumb-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                </div>
                <div class="item-content">
                    <div class="item-top-row">
                        <span class="item-id">${doc.id}</span>
                        <span class="item-badge-iso">3D Isometri</span>
                    </div>
                    <div class="item-title" title="${doc.title}">${doc.title}</div>
                    <div class="item-footer-row">
                        <span class="item-dwg-no">${doc.drawingNo}</span>
                        <span>${doc.fileSize}</span>
                    </div>
                </div>
            `;

            item.addEventListener('click', () => {
                document.querySelectorAll('.playlist-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
                selectedDoc = doc;
                loadPdfDocument(doc);
            });

            pdfDocListContainer.appendChild(item);
        });
    }

    // Load PDF Document (Column 2 & 3)
    function loadPdfDocument(doc) {
        // Stage Column (Center)
        activeDocBadge.textContent = doc.id;
        activeDocTitle.textContent = doc.title;
        activeDocSub.textContent = `${doc.fileName} • ${doc.fileSize} • Standar ISO A4 Landscape`;
        stageDrawingNo.textContent = doc.drawingNo;

        // Set PDF frame source
        pdfFrame.src = doc.pdfPath;

        // Specs Column (Right)
        specsBodyContainer.innerHTML = `
            <div class="spec-item-box">
                <span class="spec-label">Drawing Number</span>
                <span class="spec-val highlight" style="font-family: var(--font-mono);">${doc.drawingNo}</span>
            </div>
            <div class="spec-item-box">
                <span class="spec-label">Skala Lembar Kerja</span>
                <span class="spec-val">${doc.scale}</span>
            </div>
            <div class="spec-item-box">
                <span class="spec-label">Format Proyeksi</span>
                <span class="spec-val" style="color: #0284c7;">2D Ortogonal + Tampak 3D Isometri</span>
            </div>
            <div class="spec-item-box">
                <span class="spec-label">Rekomendasi Material</span>
                <span class="spec-val">${doc.material}</span>
            </div>
            <div class="spec-item-box">
                <span class="spec-label">Kategori Komponen</span>
                <span class="spec-val">${doc.category}</span>
            </div>
            <div class="spec-item-box">
                <span class="spec-label">Sumber Gambar Teknik</span>
                <span class="spec-val">${doc.source}</span>
            </div>
        `;

        // Inventor Feature Guidance
        inventorGuideText.textContent = doc.description;
    }
});
