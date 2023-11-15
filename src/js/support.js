
import fund_01 from '../img/fund_01.png';
import fund_color_01 from '../img/fund_color_01.png';
import fund_02 from '../img/fund_02.png';
import fund_color_02 from '../img/fund_color_02.png';
import fund_03 from '../img/fund_03.png';
import fund_color_03 from '../img/fund_color_03.png';
import fund_04 from '../img/fund_04.png';
import fund_color_04 from '../img/fund_color_04.png';
import fund_07 from '../img/fund_07.png';
import fund_color_07 from '../img/fund_color_07.png';
import fund_06 from '../img/fund_06.png';
import fund_color_06 from '../img/fund_color_06.png';
import fund_05 from '../img/fund_05.png';
import fund_color_05 from '../img/fund_color_05.png';
import fund_08 from '../img/fund_08.png';
import fund_color_08 from '../img/fund_color_08.png';
import fund_09 from '../img/fund_09.png';
import fund_color_09 from '../img/fund_color_09.png';

const supportFonds = [
    {
        title: 'Save the Children',
        url:
            'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: fund_01,
        img2x: fund_color_01
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: fund_02,
        img2x: fund_color_02
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: fund_03,
        img2x: fund_color_03
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: fund_04,
        img2x: fund_color_04
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: fund_07,
        img2x: fund_color_07
    },
    {
       title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: fund_06,
        img2x: fund_color_06
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: fund_05,
        img2x: fund_color_05
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: fund_08,
        img2x: fund_color_08
    },
    {
     title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: fund_09,
        img2x: fund_color_09
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




