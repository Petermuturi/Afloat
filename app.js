const tl = gsap.timeline({ defaults: { ease: 'power1.out' } }); // to chain animations

tl.to('.text', {y:'0%', duration: 1, stagger: 0.5}); // stagger to delay each text animation
tl.to('.slider', {y: '-100%', duration: 1.5, delay:0.5}); // delay for someone to read the text
tl.to('.intro', {y: '-100%', duration:1}, "-=1"); // -=1 starts -1 sec earlier
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
