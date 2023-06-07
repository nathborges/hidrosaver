# Hidrosaver

## About

The [Hidrosaver](https://hidrosaver-nathborges.vercel.app/) web app is a water tracker. Hidrosaver's purpose is to help people to organize, track and measure their current water consumption.

## Authors

| RM      | Name                      |
| ------- | ------------------------- |
| RM86786 | Arthur Sales Guilherme    |
| RM89336 | Derek Seiji Lima Sadakane |
| RM88426 | Nathália Ferreira Borges |

## Live site

https://hidrosaver-nathborges.vercel.app/

## What a user can do

The user can add new metrics to his homepage, based on the action. After adding his action, the user can access metrics, and graphs about his consumption.

## How to run
Clone the repository and inside project folder, you must run `npm i && npm run serve` on the terminal and access the Hidrosaver, by default, on http://localhost:8080/ 

## Technologies used

### Front-end

---

 <div style="display:flex">
 <a>
   <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue.js"/>
  </a>
 <a><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Javascript"/></a>
  <a><img src="https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white" alt="Chart.js"/></a>
   <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
   <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS"/>
  </a>
   <a><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS"/></a>

</div>


## Data description

All data about the user and his metrics are saved in the localStorage inside the web browser. The data structure looks like this:

```
[
    {
        "day": "05/06/23",
        "metrics": {
            "banho": { "quantity": 48, "liters": 336 },
            "torneira": { "quantity": 220, "liters": 4400 },
            "descarga": { "quantity": 0, "liters": 0 }
        }
    },
    {
        "day": "03/06/23",
        "metrics": {
            "banho": { "quantity": 100, "liters": 336 },
            "torneira": { "quantity": 220, "liters": 4400 },
            "descarga": { "quantity": 340, "liters": 100 }
        }
    },
    {
        "day": "02/06/23",
        "metrics": {
            "banho": { "quantity": 10, "liters": 10 },
            "torneira": { "quantity": 200, "liters": 200 },
            "descarga": { "quantity": 340, "liters": 400 }
        }
    },
    {
        "day": "01/06/23",
        "metrics": {
            "banho": { "quantity": 3, "liters": 3 },
            "torneira": { "quantity": 123, "liters": 12 },
            "descarga": { "quantity": 323, "liters": 32 }
        }
    }
]

```
