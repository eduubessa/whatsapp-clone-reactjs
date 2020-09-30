import React from 'react';
import './ConversationWindowComponent.css'

export default () => {
    return (
      <div className="conversation-intro">
          <img src="/connection-intro.jpg" alt="Mantenha-se connectado"/>
          <h1>Mantenha o seu telemóvel conectado</h1>
          <h2>
              O Whatsapp conecta o seu telefone para sincronizar as suas mensagens.<br />
              Para reduzir o uso de dados, conecte o seu telefone a uma rede Wi-Fi
          </h2>
      </div>
    );
}
