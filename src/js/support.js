
const supportFonds = [
    {
        title: 'Save the Children',
        url:
            'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: './img/fund-01.png',
        img2x: './img/fund-color-01.png'
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: './img/fund-02.png',
        img2x: './img/fund-color-02.png'
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: './img/fund-03.png',
        img2x: './img/fund-color-03.png'
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: './img/fund-04.png',
        img2x: './img/fund-color-04.png'
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: './img/fund-07.png',
        img2x: './img/fund-color-07.png'
    },
    {
       title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: './img/fund-06.png',
        img2x: './img/fund-color-06.png'
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: './img/fund-05.png',
        img2x: './img/fund-color-05.png'
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: './img/fund-08.png',
        img2x: './img/fund-color-08.png'
    },
    {
     title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: './img/united24.png',
        img2x: './img/united24_2x.png'
    },
];

const supportListEl = document.querySelector('.support-list');

function supportListCreateMarkup(supportFonds) {
    return supportFonds.map(({ title, url, img, img2x }, index) => 
     `<li class="support-item">
        <span class='support-item-num'>0${index + 1}</span>
        <a class="support-link" target='blank' href="${url}">
          <img
            class="support-img"
            src="${img}"
            srcset="${img} 1x, ${img2x} 2x"
            alt="${title}"
          />
        </a>
      </li>`).join('');
}
supportListEl.innerHTML = supportListCreateMarkup(supportFonds);

const supportSlideEl = document.querySelector('.support-slide');
const supportSlideDownBtnEl = document.querySelector('.support-slide-down-btn');
const supportSlideUpBtnEl = document.querySelector('.support-slide-up-btn');

supportSlideEl.addEventListener('click', slideTo);

function slideTo() {
    if (supportSlideEl.classList.contains('top')) {
        supportSlideEl.classList.remove('top');
        supportSlideUpBtnEl.style.display = 'none';
        supportSlideDownBtnEl.style.display = 'block';
        slideToTop();
    } else {
        slideToBottom();
        supportSlideEl.classList.add('top');
        supportSlideDownBtnEl.style.display = 'none';
        supportSlideUpBtnEl.style.display = 'block';
}
}

function slideToTop() {
    supportListEl.scrollTop = 0;
}

function slideToBottom() {
    supportListEl.scrollTop = supportListEl.scrollHeight;
}




