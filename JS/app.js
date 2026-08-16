
const page=location.pathname.split("/").pop()||"index.html",$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const nav=[["index.html","Home","fa-house"],["about.html","About","fa-user"],["projects.html","Projects","fa-code"],["skills.html","Skills","fa-bolt"],["experience.html","Experience","fa-briefcase"],["services.html","Services","fa-cubes"],["contact.html","Contact","fa-envelope"]];
function header(){return `<header class="header"><div class="container nav"><a class="logo" href="index.html">DEV<span>FOLIO</span>.</a><nav class="navlinks">${nav.map(n=>`<a class="${page===n[0]?"active":""}" href="${n[0]}">${n[1]}</a>`).join("")}</nav><div class="nav-actions"><button class="iconbtn" onclick="toggleTheme()"><i class="fa-solid fa-moon"></i></button><a class="btn" href="contact.html">Let's talk <i class="fa-solid fa-arrow-right"></i></a></div></div></header>`}
function footer(){return `<footer class="footer"><div class="container footer-inner"><div><b>DEVFOLIO.</b><p>Digital products. Thoughtful experiences. Measurable results.</p></div><div class="footer-social"><a href="#"><i class="fa-brands fa-github"></i></a><a href="#"><i class="fa-brands fa-linkedin-in"></i></a><a href="#"><i class="fa-brands fa-x-twitter"></i></a></div></div></footer><nav class="mobile">${nav.slice(0,5).map(n=>`<a class="${page===n[0]?"active":""}" href="${n[0]}"><i class="fa-solid ${n[2]}"></i>${n[1]}</a>`).join("")}</nav>`}
function layout(body){$("#app").innerHTML=header()+`<main class="page">${body}</main>`+footer();if(localStorage.getItem("dev_dark"))document.body.classList.add("dark")}
function toast(msg){let x=$("#toast");if(!x){x=document.createElement("div");x.id="toast";x.className="toast";document.body.appendChild(x)}x.textContent=msg;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
function projectCard(p){return `<article class="card"><div class="project-image"><i class="fa-solid ${p.icon}"></i></div><div class="eyebrow">${p.cat} · ${p.year}</div><h3>${p.title}</h3><p class="muted">${p.desc}</p><div class="chips">${p.tech.map(t=>`<span class="chip">${t}</span>`).join("")}</div><div class="card-actions"><button class="mini-btn" onclick="showProject(${p.id})">View case study</button><a class="mini-btn" href="contact.html">Start a project</a></div></article>`}
function showProject(id){let p=projects.find(x=>x.id===id);let m=document.createElement("div");m.className="modal show";m.innerHTML=`<div class="modal-box"><button class="close" onclick="this.closest('.modal').remove()">×</button><div class="eyebrow">${p.cat} · ${p.year}</div><h2 style="font:700 32px 'Space Grotesk';margin:8px 0">${p.title}</h2><p class="muted">${p.desc}</p><div class="chips" style="margin:20px 0">${p.tech.map(t=>`<span class="chip">${t}</span>`).join("")}</div><h3 style="margin-top:20px">Key features</h3><div class="checklist">${(p.features||[]).map(f=>`<div><i class="fa-solid fa-check"></i><span>${f}</span></div>`).join("")}</div><a class="btn" style="margin-top:22px" href="contact.html">Discuss a similar project</a></div>`;document.body.appendChild(m)}
function renderHome(){layout(`<section class="container hero"><div><div class="eyebrow">INDEPENDENT DEVELOPER · UI/UX · FRONTEND</div><h1>I build digital products people <span>love to use.</span></h1><p>I’m Alex Morgan, a frontend developer and product designer creating fast, accessible and conversion-focused web experiences for ambitious brands.</p><div class="actions"><a class="btn" href="projects.html">Explore my work <i class="fa-solid fa-arrow-right"></i></a><a class="btn outline" href="contact.html">Let's collaborate</a></div><div class="hero-meta"><div><strong>6</strong><small>PROJECTS</small></div><div><strong>6+</strong><small>YEARS EXP.</small></div><div><strong>18</strong><small>GLOBAL CLIENTS</small></div></div></div><div class="profile-card"><div class="profile-photo"><div class="person"><i class="fa-solid fa-user-astronaut"></i></div></div><div class="profile-bottom"><div><b>Alex Morgan</b><div class="status"><i class="fa-solid fa-circle"></i> Available for select projects</div></div><span class="chip">REMOTE</span></div></div></section><section class="container section"><div class="section-head"><div><div class="eyebrow">SELECTED WORK</div><h2>Recent projects</h2></div><a class="btn outline" href="projects.html">View all</a></div><div class="grid">${projects.slice(0,3).map(projectCard).join("")}</div></section><section class="container section"><div class="quote"><p>“Great design is not just how something looks. It’s how effortlessly it helps someone achieve a goal.”</p><small>— Alex Morgan, Developer & Product Designer</small></div></section>`)}
function renderAbout(){layout(`<div class="container"><div class="section-head"><div><div class="eyebrow">ABOUT ME</div><h1>Developer with a product mindset.</h1><p class="muted">Design thinking meets engineering discipline.</p></div></div><div class="about-grid"><div class="about-box"><h3>Building with purpose.</h3><p class="muted">I specialize in turning complex requirements into simple, polished digital experiences. My approach combines thoughtful UX, clean frontend architecture and measurable business goals.</p><div class="checklist"><div><i class="fa-solid fa-check"></i><span>Performance-first development</span></div><div><i class="fa-solid fa-check"></i><span>Accessible and responsive interfaces</span></div><div><i class="fa-solid fa-check"></i><span>Reusable component systems</span></div><div><i class="fa-solid fa-check"></i><span>Clear communication from idea to launch</span></div></div></div><div class="about-box"><h3>My toolkit</h3><div class="skills-list">${skills.slice(0,6).map(s=>`<div class="skill"><div class="skill-top"><span>${s[0]}</span><span>${s[1]}%</span></div><div class="bar"><span style="width:${s[1]}%"></span></div></div>`).join("")}</div></div></div></div>`)}
function renderProjects(){layout(`<div class="container"><div class="section-head"><div><div class="eyebrow">PORTFOLIO</div><h1>Selected projects.</h1><p class="muted">A collection of products, interfaces and experiments.</p></div></div><div class="filters"><button class="filter active" onclick="filterProjects('All',this)">All</button><button class="filter" onclick="filterProjects('Web App',this)">Web Apps</button><button class="filter" onclick="filterProjects('Dashboard',this)">Dashboards</button><button class="filter" onclick="filterProjects('Product Design',this)">Product Design</button><button class="filter" onclick="filterProjects('Portfolio',this)">Portfolio</button></div><div id="projectGrid" class="grid">${projects.map(projectCard).join("")}</div></div>`)}
function filterProjects(cat,b){$$(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");let a=cat==="All"?projects:projects.filter(x=>x.cat===cat);$("#projectGrid").innerHTML=a.map(projectCard).join("")}
function renderSkills(){layout(`<div class="container"><div class="section-head"><div><div class="eyebrow">EXPERTISE</div><h1>Skills & capabilities.</h1><p class="muted">Tools are useful. Knowing when and why to use them matters more.</p></div></div><div class="about-grid"><div class="about-box">${skills.map(s=>`<div class="skill"><div class="skill-top"><span>${s[0]}</span><span>${s[1]}%</span></div><div class="bar"><span style="width:${s[1]}%"></span></div></div>`).join("")}</div><div class="about-box"><h3>What I bring</h3><div class="checklist"><div><i class="fa-solid fa-layer-group"></i><span><b>Frontend Engineering</b><br><small class="muted">Semantic HTML, scalable CSS and modern JavaScript.</small></span></div><div><i class="fa-solid fa-pen-ruler"></i><span><b>Product Design</b><br><small class="muted">Wireframes, systems, prototypes and interaction design.</small></span></div><div><i class="fa-solid fa-gauge-high"></i><span><b>Performance</b><br><small class="muted">Fast loading, optimized assets and responsive experiences.</small></span></div><div><i class="fa-solid fa-universal-access"></i><span><b>Accessibility</b><br><small class="muted">Inclusive interfaces built around real users.</small></span></div></div></div></div></div>`)}
function renderExperience(){layout(`<div class="container"><div class="section-head"><div><div class="eyebrow">CAREER</div><h1>Experience & milestones.</h1><p class="muted">A few chapters from my professional journey.</p></div></div><div class="timeline"><div class="timeline-item"><div class="date">2024 — PRESENT</div><h3>Senior Frontend Developer · Northstar Labs</h3><p>Leading frontend architecture for SaaS products, collaborating with designers and product teams to ship scalable customer experiences.</p></div><div class="timeline-item"><div class="date">2022 — 2024</div><h3>Product Developer · Bright Digital</h3><p>Built responsive marketing sites and product interfaces for startups and established brands across multiple industries.</p></div><div class="timeline-item"><div class="date">2020 — 2022</div><h3>Frontend Developer · Pixel Foundry</h3><p>Developed component-driven websites and helped establish a reusable UI system for client projects.</p></div><div class="timeline-item"><div class="date">2019 — 2020</div><h3>Junior Web Developer · Studio 17</h3><p>Started my professional journey building accessible websites and learning the fundamentals of product development.</p></div></div></div>`)}
function renderServices(){let services=[["fa-code","Frontend Development","Fast, responsive and maintainable interfaces built with modern web standards."],["fa-pen-ruler","UI/UX Design","Clear user flows, polished interfaces and practical design systems."],["fa-rocket","Landing Pages","Conversion-focused pages for products, campaigns and launches."],["fa-gauge-high","Performance Optimization","Improve loading speed, Core Web Vitals and real-world usability."],["fa-mobile-screen","Responsive Design","Consistent experiences across phones, tablets and desktops."],["fa-screwdriver-wrench","Website Support","Ongoing improvements, fixes and feature development after launch."]];layout(`<div class="container"><div class="section-head"><div><div class="eyebrow">SERVICES</div><h1>How I can help.</h1><p class="muted">Flexible engagement for focused projects or long-term partnerships.</p></div></div><div class="grid">${services.map(s=>`<div class="card service-card"><div class="service-icon"><i class="fa-solid ${s[0]}"></i></div><h3>${s[1]}</h3><p class="muted">${s[2]}</p><a href="contact.html" style="display:inline-block;margin-top:20px;color:var(--accent);font-size:10px;font-weight:800">Discuss this service →</a></div>`).join("")}</div></div>`)}
function renderContact(){layout(`<div class="container"><div class="section-head"><div><div class="eyebrow">CONTACT</div><h1>Have a project in mind?</h1><p class="muted">Tell me what you're building. I'll get back to you within 1–2 business days.</p></div></div><div class="contact-grid"><div class="contact-list"><div class="contact-item"><div class="contact-icon"><i class="fa-solid fa-envelope"></i></div><div><b>Email</b><p class="muted">hello@devfolio.pro</p></div></div><div class="contact-item"><div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div><div><b>Location</b><p class="muted">Available worldwide · Remote</p></div></div><div class="contact-item"><div class="contact-icon"><i class="fa-solid fa-clock"></i></div><div><b>Availability</b><p class="muted">Taking select projects</p></div></div></div><form class="form" onsubmit="submitForm(event)"><div class="form-grid"><div class="form-group"><label>YOUR NAME</label><input id="name" required placeholder="Alex Smith"></div><div class="form-group"><label>EMAIL ADDRESS</label><input id="email" type="email" required placeholder="alex@example.com"></div><div class="form-group"><label>PROJECT TYPE</label><input id="type" placeholder="Website / Web App"></div><div class="form-group"><label>BUDGET</label><input id="budget" placeholder="$2,000 — $5,000"></div><div class="form-group full"><label>MESSAGE</label><textarea id="message" required placeholder="Tell me about your project..."></textarea></div><div class="form-group full"><button class="btn">Send inquiry <i class="fa-solid fa-paper-plane"></i></button></div></div></form></div></div>`)}
function submitForm(e){e.preventDefault();let n=$("#name").value;localStorage.setItem("dev_last_contact",n);e.target.reset();toast("Thanks! Your inquiry has been saved.");}
function toggleTheme(){document.body.classList.toggle("dark");document.body.classList.contains("dark")?localStorage.setItem("dev_dark","1"):localStorage.removeItem("dev_dark")}
function render(){if(page==="index.html")renderHome();else if(page==="about.html")renderAbout();else if(page==="projects.html")renderProjects();else if(page==="skills.html")renderSkills();else if(page==="experience.html")renderExperience();else if(page==="services.html")renderServices();else if(page==="contact.html")renderContact();else renderHome()}
render();
function renderSkills() {

    layout(`

    <div class="container">

        <!-- PAGE HEADER -->
        <div class="section-head">

            <div>

                <div class="eyebrow">
                    TECHNICAL EXPERTISE
                </div>

                <h1>
                    Skills & Technologies.
                </h1>

                <p class="muted">
                    Technologies and tools I use to build modern,
                    responsive and professional applications.
                </p>

            </div>

        </div>


        <!-- SKILL CATEGORIES -->

        <div class="skill-category-grid">


            <!-- FRONTEND -->

            <div class="skill-category card">

                <div class="category-header">

                    <div class="category-icon">
                        <i class="fa-solid fa-code"></i>
                    </div>

                    <div>
                        <h3>Frontend Development</h3>

                        <p class="muted">
                            Building responsive and interactive web interfaces.
                        </p>
                    </div>

                </div>


                <div class="technology-list">

                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-brands fa-html5"></i>
                                HTML5
                            </span>

                            <strong>95%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:95%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-brands fa-css3-alt"></i>
                                CSS3
                            </span>

                            <strong>92%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:92%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-brands fa-js"></i>
                                JavaScript
                            </span>

                            <strong>90%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:90%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-brands fa-bootstrap"></i>
                                Bootstrap
                            </span>

                            <strong>88%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:88%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-solid fa-mobile-screen"></i>
                                Responsive Design
                            </span>

                            <strong>94%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:94%"></span>
                        </div>

                    </div>

                </div>

            </div>



            <!-- JAVA / BACKEND -->

            <div class="skill-category card">

                <div class="category-header">

                    <div class="category-icon">
                        <i class="fa-brands fa-java"></i>
                    </div>

                    <div>

                        <h3>Java & Backend</h3>

                        <p class="muted">
                            Application development and backend fundamentals.
                        </p>

                    </div>

                </div>


                <div class="technology-list">

                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-brands fa-java"></i>
                                Java
                            </span>

                            <strong>85%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:85%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-solid fa-database"></i>
                                JDBC
                            </span>

                            <strong>80%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:80%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-brands fa-node-js"></i>
                                Node.js
                            </span>

                            <strong>78%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:78%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-solid fa-server"></i>
                                Express.js
                            </span>

                            <strong>75%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:75%"></span>
                        </div>

                    </div>

                </div>

            </div>



            <!-- DATABASE -->

            <div class="skill-category card">

                <div class="category-header">

                    <div class="category-icon">
                        <i class="fa-solid fa-database"></i>
                    </div>

                    <div>

                        <h3>Database & SQL</h3>

                        <p class="muted">
                            Database design, queries and data management.
                        </p>

                    </div>

                </div>


                <div class="technology-list">

                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-solid fa-database"></i>
                                MySQL
                            </span>

                            <strong>88%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:88%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-solid fa-code"></i>
                                SQL
                            </span>

                            <strong>90%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:90%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-solid fa-link"></i>
                                Joins
                            </span>

                            <strong>88%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:88%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-solid fa-table"></i>
                                Database Design
                            </span>

                            <strong>85%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:85%"></span>
                        </div>

                    </div>


                    <div class="technology">

                        <div class="tech-info">

                            <span>
                                <i class="fa-solid fa-gears"></i>
                                Stored Procedures
                            </span>

                            <strong>78%</strong>

                        </div>

                        <div class="skill-bar">
                            <span style="width:78%"></span>
                        </div>

                    </div>

                </div>

            </div>



            <!-- TOOLS -->

            <div class="skill-category card">

                <div class="category-header">

                    <div class="category-icon">
                        <i class="fa-solid fa-screwdriver-wrench"></i>
                    </div>

                    <div>

                        <h3>Tools & Platforms</h3>

                        <p class="muted">
                            Development tools used in daily workflow.
                        </p>

                    </div>

                </div>


                <div class="tool-grid">

                    <div class="tool">

                        <i class="fa-brands fa-git-alt"></i>

                        <span>Git</span>

                    </div>


                    <div class="tool">

                        <i class="fa-brands fa-github"></i>

                        <span>GitHub</span>

                    </div>


                    <div class="tool">

                        <i class="fa-solid fa-code"></i>

                        <span>VS Code</span>

                    </div>


                    <div class="tool">

                        <i class="fa-solid fa-laptop-code"></i>

                        <span>NetBeans</span>

                    </div>


                    <div class="tool">

                        <i class="fa-solid fa-server"></i>

                        <span>XAMPP</span>

                    </div>


                    <div class="tool">

                        <i class="fa-solid fa-database"></i>

                        <span>phpMyAdmin</span>

                    </div>

                </div>

            </div>



            <!-- DEVELOPMENT -->

            <div class="skill-category card">

                <div class="category-header">

                    <div class="category-icon">
                        <i class="fa-solid fa-layer-group"></i>
                    </div>

                    <div>

                        <h3>Development Skills</h3>

                        <p class="muted">
                            Practical development capabilities.
                        </p>

                    </div>

                </div>


                <div class="capability-list">

                    <span>
                        <i class="fa-solid fa-check"></i>
                        CRUD Operations
                    </span>

                    <span>
                        <i class="fa-solid fa-check"></i>
                        REST API
                    </span>

                    <span>
                        <i class="fa-solid fa-check"></i>
                        Form Validation
                    </span>

                    <span>
                        <i class="fa-solid fa-check"></i>
                        DOM Manipulation
                    </span>

                    <span>
                        <i class="fa-solid fa-check"></i>
                        LocalStorage
                    </span>

                    <span>
                        <i class="fa-solid fa-check"></i>
                        Debugging
                    </span>

                    <span>
                        <i class="fa-solid fa-check"></i>
                        Responsive UI
                    </span>

                    <span>
                        <i class="fa-solid fa-check"></i>
                        Problem Solving
                    </span>

                </div>

            </div>



            <!-- CURRENTLY LEARNING -->

            <div class="skill-category card learning-card">

                <div class="category-header">

                    <div class="category-icon">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>

                        <h3>Currently Learning</h3>

                        <p class="muted">
                            Technologies I'm improving continuously.
                        </p>

                    </div>

                </div>


                <div class="learning-list">

                    <div>

                        <span>
                            React.js
                        </span>

                        <small>
                            Learning
                        </small>

                    </div>


                    <div>

                        <span>
                            Spring Boot
                        </span>

                        <small>
                            Learning
                        </small>

                    </div>


                    <div>

                        <span>
                            REST APIs
                        </span>

                        <small>
                            Improving
                        </small>

                    </div>


                    <div>

                        <span>
                            Advanced Java
                        </span>

                        <small>
                            Improving
                        </small>

                    </div>

                </div>

            </div>

        </div>


        <!-- BOTTOM SUMMARY -->

        <div class="section">

            <div class="quote">

                <p>
                    “I don't just learn technologies.
                    I build projects with them.”
                </p>

                <small>
                    Frontend · Java · SQL · Full Stack Development
                </small>

            </div>

        </div>

    </div>

    `);
}