const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
  {
    titulo: "Laptop",
    desc: "16GB RAM",
    image: "https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500", 
    price: "$1.000.000"       
  },
  {
    titulo: "Mouse",
    desc: "Inalámbrico",
    image: "https://media.falabella.com/falabellaCO/123221028_01/w=1500,h=1500,fit=pad",  
    price: "$250.000"         
  },
  {
    titulo: "Teclado",
    desc: "Mecánico RGB",
    image: "https://panamericana.vtexassets.com/arquivos/ids/490884/teclado-alambrico-gaming-kb876l-wh-gamenote-6939119034030.jpg?v=638175177232700000",
    price: "$300.000"
  },
  {
    titulo: "Monitor",
    desc: "24 pulgadas Full HD",
    image: "https://olimpica.vtexassets.com/arquivos/ids/1461935/7700136724452_A1N1_es_s01_B1.jpg?v=638557854266730000",
    price: "$750.000"
  },
  {
    titulo: "Auriculares",
    desc: "Cancelación de ruido",
    image: "https://www.mipcparquecentral.com/cdn/shop/files/imagen-auriculares_g733_audifonos_inalambricos_con_microfono_azul-1.jpg?v=1709752195",
    price: "$150.000"
  }
];

productos.forEach(p => {
  const clon = template.content.cloneNode(true);
  clon.querySelector(".title").textContent = p.titulo;
  clon.querySelector(".desc").textContent = p.desc;
  
  const imgElem = clon.querySelector(".image");
  if (imgElem) imgElem.src = p.image;
  const priceElem = clon.querySelector(".price");
  if (priceElem) priceElem.textContent = p.price;
  contenedor.appendChild(clon);
});

