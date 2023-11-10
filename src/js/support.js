

const supportFonds = [
    {
        title: 'Save the Children',
        url:
            'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: '../img/fund-01.png',
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: '../img/fund-02.png',
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: '../img/fund-09.png',
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: '../img/fund-03.png',
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: '../img/fund-07.png',
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: '../img/fund-04.png',
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: '../img/fund-05.png',
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: '../img/fund-08.png',
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: '../img/fund-06.png',
    },
];


const supportList = document.querySelector('.support-list');

function supportListCreateMarkup(supportFonds) {
    return supportFonds.map(({ title, url, img }, index) => 
     `<li class="support-item">
        <span class='support-item-num'>0${index + 1}</span>
        <a class="support-link" target='blank' href="${url}">
          <img
            class="support-img"
            src="${img}"
            alt="${title}"
          />
        </a>
      </li>`).join('');
}
supportList.innerHTML = supportListCreateMarkup(supportFonds);


