import { getCSS } from "./common"

async function quantidadeUsuarios() {
 const url = 'https://raw.githubusercontent.com/guilhermeonrais/api/main/numero-usuarios.json'
 const res = await fetch(url)
 const dados = await res.json()
 const nomeDasRedes = Object.keys(dados)
const quantidadeDeUsuarios = Object.values(dados)
}
 const data = [
    {
         x: nomeDasRedes,
         y: quantidadeDeUsuarios, 
         type: 'bar',
         marker: {
            color: getCSS('--primary-color')
         }
    }
 ]
 const laytout = {
 plot_bgcolor: getCSS('--bg-color'),
 paper_bgcolor: getcss('--bg-color'),
    
    title: {
    
    text: 'Redes sociais com mais usuários',
    
    x: 0,
    
    font: {
    
    color: getcss('--primary-color'),
    
    size: 30,
    
    font: getCSS('--font')
    
    }
    
    },
    
    xaxis: {
    
    tickfont: tickConfig,
    
    title: {
    
    text: 'Nome das redes',
    
    font: {
    
    color: getCSS('--secondary-color')
    
    }
    
    }
    
    },
    
    yaxis: {
    
    tickfont: tickConfig,
    
    title: {
    
    text: 'Bilhões de usuários ativos',
    
    font: {
    
    color: getcss('--secondary-color')
    
    }
    
    }
    }
    }
    

  const grafico = document.createElement('div')
  grafico.className ='grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico,data)
  quantidadeUsuariosPorRede()