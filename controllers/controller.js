const express = require('express')


const evento = [
    {
        id: 1,
        nome: "Luan Santana",
        local: "Arena Opus",
        descricao: "O maior show que São José já viu!",
        preco: 178,
        foto: "https://midias.em.com.br/_midias/png/2024/06/04/1000x1000/1_luansantana-37706688.png"
    }
]

const cadastrarEvent = async (req, res) => {
    try {
        evento.push(req.body)
        res.status(201).json(evento)
        console.log(evento)

    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(400).json({ message: 'O servidor não pode solicitar a sua requisição' });
    }
}

const listEvent = async (req, res) => {
    try {
        const eventosSoComNomeEFoto = []
        evento.map(({foto,nome})=> {
             const eventoFiltrado = {foto,nome}
             eventosSoComNomeEFoto.push(eventoFiltrado)
        })
        console.log(eventosSoComNomeEFoto)
        res.json({eventos:eventosSoComNomeEFoto})
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(400).json({ message: 'O servidor não pode solicitar a sua requisição' });
    }

}

const detalhesEvent = async (req, res) =>{
    try {
       res.json(evento)
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(400).json({ message: 'O servidor não pode solicitar a sua requisição' });
    }

    
}



module.exports = { cadastrarEvent,listEvent, detalhesEvent}