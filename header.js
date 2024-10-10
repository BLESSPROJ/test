class MyHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                #header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background-color: #ffffff;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                #header.transparent {
                    background-color: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(5px);
                }
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-left: 10px;
                    height: 70px;
                }
                .logo img {
                    width: 150px;
                    height: auto;
                }
                nav {
                    padding-right: 50px;
                }
                nav ul {
                    display: flex;
                    gap: 20px;
                    padding: 0;
                    margin: 0;
                }
                nav ul li {
                    list-style: none;
                    position: relative;
                }
                nav ul li:not(:last-child) {
                    border-right: 1px solid #ccc;
                    padding-right: 20px;
                }
                nav ul li a {
                    text-decoration: none;
                    color: #333;
                    font-weight: bold;
                    font-size: 1rem;
                    padding: 5px 10px;
                    transition: color 0.3s;
                }
                nav ul li a:hover {
                    color: #1e90ff;
                }
                @media (max-width: 768px) {
                    .logo img {
                        width: 120px;
                    }
                }
            </style>
            <div id="header">
                <header>
                    <div class="logo">
                        <a href="index.html"><img src="img/header_logo.png" alt="RiseXLogo"></a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="challenge.html">Challenge</a></li>
                            <li><a href="teamnews.html">TeamNews</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        `;
    }

    connectedCallback() {
        window.addEventListener('scroll', () => {
            const header = this.shadowRoot.querySelector('#header');
            if (window.scrollY > 0) {
                header.classList.add('transparent');
            } else {
                header.classList.remove('transparent');
            }
        });
    }
}

customElements.define('my-header', MyHeader);