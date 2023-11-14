const buscarGatinhos = (e) => {
    e.preventDefault()
    const xhr = new XMLHttpRequest( )
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4){
            if (xhr.status === 200) {
                const cats = JSON.parse(xhr.responseText)
                cats.forEach(cat => {
                    const img = document.createElement('img')
                    img.src = cat.url

                    const idElement = document.createElement('p')
                    idElement.textContent = `ID do gatinho: ${cat.id}`

                    const resolutionElement = document.createElement('p');
                    resolutionElement.textContent = `Resolução do Gatinho: ${cat.width} x ${cat.height}`;

                    const container = document.createElement('div');
                    container.classList.add('cat-container');
                    container.appendChild(img);
                    container.appendChild(idElement);
                    container.appendChild(resolutionElement);

                    document.querySelector("#gatinhos").appendChild(container);
                })
            } else {
                alert ('Erro na requisição')
            }
        }
    }
    xhr.send()
}

const btnMostrar = document.querySelector("#mostrar-gatinhos")
btnMostrar.addEventListener("click", buscarGatinhos)

const getMarcas = () => {
    const url = "https://raw.githubusercontent.com/f111ppo/111p2s/43/car-logos-dataset/master/logos/data.json";
  
    fetch(url)
      .then(resposta => resposta.json())
      .then(marcas => {
        const ul = document.createElement('ul');
  
        marcas.forEach(marca => {
          const li = document.createElement('li');
          const logo = document.createElement('img');
  
          logo.src = marca.image?.optimized;
          li.appendChild(logo);
          ul.appendChild(li);
  
          console.log(marca);
        });
  
        document.body.appendChild(ul);
      })
      .catch(erro => console.log(erro));
  };
  
  const btnMarcas = document.querySelector("#marcas");
  btnMarcas.addEventListener("click", getMarcas);
  