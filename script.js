const countryName=new URLSearchParams(location.search).get('name')
const flagImage=document.querySelector(".countries-detail img")
const info=document.querySelector(".country-information h2")
const native=document.querySelector(".detail-text .inner1")
const population=document.querySelector(".detail-text .inner2")
const region=document.querySelector(".detail-text .inner3")
const SubRegion=document.querySelector(".detail-text .inner4")
const capital=document.querySelector(".detail-text .inner5")
const TopLevelDomain=document.querySelector(".detail-text .inner6")
const currencies=document.querySelector(".detail-text .inner7")
const languages=document.querySelector(".detail-text .inner8")
const BorderCountryName=document.querySelector('.border-contries')
const DarkTheme=document.querySelector('.dark-theme')
const body=document.querySelector('body')
const LightTheme=document.querySelector('.light-theme')
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>res.json())
.then(([country])=>{
    // console.log(country)
    flagImage.src=country.flags.svg
    info.innerHTML=country.name.common
    if(country.altSpellings[1]){
        native.innerHTML=country.altSpellings[1]
    }else{
        native.innerHTML=country.name.common
    }
    population.innerHTML=country.population.toLocaleString('en-IN')
    region.innerHTML=country.region
        SubRegion.innerHTML=country.subregion
        capital.innerHTML=country.capital
    TopLevelDomain.innerHTML=country.tld.join(' , ')
    if(country.currencies){
        currencies.innerHTML=(Object.values(country.currencies).map((currencies)=>currencies.name).join(' , '))
    }
    if(country.languages){
        languages.innerHTML=(Object.values(country.languages).join(' , '))
    }
    if(country.borders){
        country.borders.forEach((border)=>{
            // console.log(border)
            fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=>res.json())
            .then(([BorderCountry])=>{
                console.log(BorderCountry)
                const BorderCountryTag=document.createElement('a')
                BorderCountryTag.href=`control.html?name=${BorderCountry.name.common}`
                BorderCountryTag.innerText=BorderCountry.name.common
                console.log(BorderCountryTag)
                BorderCountryName.append(BorderCountryTag)
            })
        })
    }
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