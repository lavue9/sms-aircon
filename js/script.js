document.addEventListener('DOMContentLoaded',()=>{const e=document.querySelector('#heroSlider');if(e)new bootstrap.Carousel(e,{interval:5000,ride:'carousel',pause:false});});

(()=>{

const e=document.querySelector('#heroSlider');

if(e)
new bootstrap.Carousel(e,{
interval:5000,
ride:'carousel',
pause:false
});

})();


// ===============================
// WhatsApp Contact Form
// ===============================

document.getElementById("whatsappForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    let phone = "919920105177";

    let whatsappMessage =
`Hello SMS AIRCON,

I would like to enquire about your services.

Name: ${name}

Mobile: ${mobile}

Email: ${email}

Service Required: ${service}

Message:
${message}

Thank you.`;

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

});

// Close mobile menu first, then scroll to the selected section
document.querySelectorAll('.navbar-collapse a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const navbar = document.querySelector('.navbar-collapse');

        if (!targetSection) return;

        e.preventDefault();

        const scrollToSection = () => {
            const headerHeight =
                document.querySelector('.navbar')?.offsetHeight || 0;

            const targetPosition =
                targetSection.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        };

        if (navbar.classList.contains('show')) {
            const bsCollapse =
                bootstrap.Collapse.getInstance(navbar) ||
                new bootstrap.Collapse(navbar, { toggle: false });

            navbar.addEventListener(
                'hidden.bs.collapse',
                scrollToSection,
                { once: true }
            );

            bsCollapse.hide();
        } else {
            scrollToSection();
        }
    });
});


const serviceCards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

serviceCards.forEach(card=>observer.observe(card));