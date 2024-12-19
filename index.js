const countriesContainer=document.querySelector('.countries-container')
const filterByRegion=document.querySelector('.filter')
let allCountriesData
const inputName=document.querySelector('.search input')
const DarkTheme=document.querySelector('.dark-theme')
const body=document.querySelector('body')
const LightTheme=document.querySelector('.light-theme')
fetch('https://restcountries.com/v3.1/all').then((res)=>res.json())
.then((data)=>{
    RenderCountries(data)
    allCountriesData=data
})
filterByRegion.addEventListener('change',(e)=>{
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`).then((res)=>res.json())
    .then(RenderCountries)
})
function RenderCountries(data){
    countriesContainer.innerHTML=''
    data.forEach((country)=>{
        const countryCard=document.createElement('a')
        countryCard.classList.add('card1')
        countryCard.href=`/control.html?name=${country.name.common}`
        const cardHTML=`
            <div class="image">
                <img src="${country.flags.svg}" class="skeliton">
            </div>
            <div class="text">
                <p class="country-name">${country.name.common}</p>
                <ul>
                    <li><b>Population:</b> ${country.population.toLocaleString('en-IN')}</li>
                    <li><b>Region:</b> ${country.region}</li>
                    <li><b>Capital:</b> ${country.capital}</li>
                </ul>
            </div>
        `
        countryCard.innerHTML=cardHTML
        countriesContainer.append(countryCard)
    })
}
inputName.addEventListener('input',(e)=>{
    const SearchedCountries=allCountriesData.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    RenderCountries(SearchedCountries)
})
DarkTheme.addEventListener('click',()=>{
    body.classList.toggle('dark')
    LightTheme.classList.toggle('light')
    DarkTheme.classList.toggle('light')
})
LightTheme.addEventListener('click',()=>{
    body.classList.remove('dark')
    LightTheme.classList.remove('light')
    DarkTheme.classList.remove('light')
})