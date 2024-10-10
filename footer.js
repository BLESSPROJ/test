class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                background-color: #f5f5f5;
                color: #333;
                padding: 40px 0;
                font-size: 14px;
                font-family: Arial, sans-serif;
            }
            .footer-content {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
            }
            .footer-column {
                display: flex;
                flex-direction: column;
            }
            .footer-column:nth-child(1) {
                flex: 0 0 auto;
                margin-right: 40px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .footer-column:nth-child(2) {
                flex: 1;
                align-self: stretch;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .footer-column:nth-child(3) {
                flex: 0 0 auto;
                align-self: center;
            }
            .footer-logo-container {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }
            .footer-logo {
                font-weight: bold;
                font-size: 18px;
                margin-right: 5px;
            }
            .footer-icon {
                display: flex;
                align-items: center;
            }
            .footer-icon img {
                width: 24px;
                height: 24px;
            }
            .footer-links a {
                color: #333;
                text-decoration: none;
            }
            .footer-info p {
                margin: 5px 0;
            }
            .footer-social {
                display: flex;
                flex-direction: row;
                gap: 15px;
            }
            .footer-social a {
                color: #333;
                text-decoration: none;
            }
            .footer-social svg {
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            .footer-social a:hover {
                color: #1DA1F2;
            }
            @media (max-width: 768px) {
                .footer-content {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .footer-column {
                    margin-bottom: 30px;
                    align-items: center;
                }
                .footer-column:nth-child(1) {
                    margin-right: 0;
                    margin-bottom: 20px;
                }
                .footer-column:nth-child(2) {
                    margin-right: 0;
                }
                .footer-info {
                    text-align: center;
                }
            }
        </style>
        <footer>
            <div class="footer-content">
                <div class="footer-column">
                    <div class="footer-logo-container">
                        <div class="footer-logo">RISE</div>
                        <div class="footer-icon">
                            <img src="img/icon.jpg" alt="X Icon" width="24" height="24"/>
                        </div>
                    </div>
                    <div class="footer-links">
                        <a href="#">문의하기</a>
                    </div>
                </div>
                <div class="footer-column">
                    <div class="footer-info">
                        <p>주소: 경기도 광주시 경안천로 164 2층</p>
                        <p>전화: 010 - 2721 - 5083</p>
                        <p>이메일: info@risex.co.kr</p>
                        <p>© 2024 RISE:X. Copy all rights reserved.</p>
                    </div>
                </div>
                <div class="footer-column">
                    <div class="footer-social">
                        <a href="#" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Blog">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2 2h20c1.1 0 2 .9 2 2v15c0 1.1-.9 2-2 2h-3l-3 2-3-2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z"/>
                                <text x="12" y="14" font-family="Arial, sans-serif" font-weight="bold" font-size="8" text-anchor="middle" fill="#fff">Blog</text>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('my-footer', MyFooter);