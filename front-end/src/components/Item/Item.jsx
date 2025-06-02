import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://a0.muscache.com/im/pictures/a3e4cb6c-b74c-4446-82e3-1488577da748.jpg?im_w=1200"
        alt="Imagem da acomodação"
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="text-gray-500 truncate">
          Cobertura, duplex, em frente a praia das Dunas, Cabo Frio. As três
          suítes são climatizadas, com ar condicionado, TV a cabo, internet
          Wi-Fi, cozinha completa, churrasqueira e piscina e churrasqueira
          privativa. Estacionamento para dois carros dentro do prédio. Com uma
          área externa com vista panorâmica da para das Dunas. O espaço é uma
          cobertura duplex. Bairro calmo. Na rua lateral você encontra um
          mercado, padaria, farmácia, restaurante e pizzaria. A praia das Dunas
          é uma das mais tranquilas de Cabo Frio, com águas calmas. 3-5 minutos
          da Praia do Forte (indo de carro) e 10 minutos do centro da cidade.
        </p>
        <p>
          <span className="font-semibold">R$550</span> por noite
        </p>
      </div>
    </a>
  );
};

export default Item;
