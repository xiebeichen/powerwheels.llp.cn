/*
 * 简易轮播脚本
 * 轮播图将在页面载入后每 5 秒自动切换，并提供手动切换控制和小圆点指示。
 */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.hero-slider .indicators .dot');
    const nextBtn = document.querySelector('.hero-slider .next');
    const prevBtn = document.querySelector('.hero-slider .prev');
    let currentIndex = 0;

    function showSlide(index) {
        // 移除当前活动样式
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        // 更新索引，确保循环播放
        currentIndex = (index + slides.length) % slides.length;
        // 激活新幻灯片
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // 自动轮播
    let timer = setInterval(nextSlide, 5000);

    // 点击下一张
    nextBtn.addEventListener('click', () => {
        clearInterval(timer);
        nextSlide();
        timer = setInterval(nextSlide, 5000);
    });

    // 点击上一张
    prevBtn.addEventListener('click', () => {
        clearInterval(timer);
        prevSlide();
        timer = setInterval(nextSlide, 5000);
    });

    // 圆点切换
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            clearInterval(timer);
            showSlide(idx);
            timer = setInterval(nextSlide, 5000);
        });
    });
});