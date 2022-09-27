import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import validator from "validator";

const Contato = () => {
  const [supportForm, setsupportForm] = useState({
    Nome: "",
    Email: "",
    Area: "",
    Assunto: "",
    Mensagem: "",
  });
  const [validateMessage, setValidateMessage] = useState({
    status: false,
    mensagem: "",
  });

  const [responseData, setResponseData] = useState({
    status: false,
    mensagem: "",
  });

  const onChange = (el) => {
    const key = el.target.name;
    const value = el.target.value;

    setsupportForm((old) => ({
      ...old,
      [key]: value,
    }));
  };

  console.log(supportForm);

  const save = async () => {
    const verifyEmail = validator.isEmail(supportForm.Email);

    if (verifyEmail) {
      setValidateMessage({
        status: false,
        mensagem: "",
      });

      try {
        const response = await fetch("/api/save-support", {
          method: "POST",
          body: JSON.stringify(supportForm),
        });

        const data = await response.json();
        setResponseData(data);
        setsupportForm({
          Nome: "",
          Email: "",
          Area: "",
          Assunto: "",
          Mensagem: "",
        });

        setTimeout(() => {
          setResponseData({
            status: false,
            mensagem: "",
          });
        }, 3000);
      } catch (e) {}
    } else {
      setValidateMessage({
        status: true,
        mensagem: "Por gentileza, inserir um Email válido",
      });
    }
  };

  return (
    <section className="container px-6 py-10 mx-auto">
      <PageTitle title="Suporte" />
      <div className="lg:flex lg:items-start lg:-mx-10">
        <div className="lg:flex my-20 lg:flex-col lg:w-1/2 lg:mx-10">
          {!responseData.status && !responseData.mensagem && (
            <div>
              <p className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
                Suporte Técnico
              </p>

              <p className="mt-4 text-gray-700">
                Por gentileza, caso tenha necessidade de entrar em contato com
                alguma das áreas de engenharia ou necessitar do suporte técnico,
                utilize o formulário.
              </p>

              <div className="mt-12">
                {validateMessage.status && (
                  <p className="py-4 text-sm text-red-600">
                    {validateMessage.mensagem}
                  </p>
                )}
                <div className="-mx-2 md:items-center md:flex mb-4">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600">
                      Seu nome
                    </label>
                    <input
                      type="text"
                      placeholder="Joao Marcelo"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-green-600 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="Nome"
                      onChange={onChange}
                      value={supportForm.Nome}
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600">
                      Seu Email
                    </label>
                    <input
                      type="email"
                      placeholder="joaomarcelo@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-green-600 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="Email"
                      onChange={onChange}
                      value={supportForm.Email}
                    />
                  </div>
                </div>

                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600">
                      Área
                    </label>
                    <input
                      type="text"
                      placeholder="Engenharia"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-green-600 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="Area"
                      onChange={onChange}
                      value={supportForm.Area}
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600">
                      Assunto
                    </label>
                    <input
                      type="text"
                      placeholder="Ajustes de Processos"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-green-600 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="Assunto"
                      onChange={onChange}
                      value={supportForm.Assunto}
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Mensagem
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 focus:border-green-600 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Mensagem"
                    name="Mensagem"
                    onChange={onChange}
                    value={supportForm.Mensagem}
                  ></textarea>
                </div>

                <button
                  onClick={save}
                  className="w-full px-6 py-3 mt-4 text-lg font-medium tracking-wide text-mainColorLight capitalize bg-mainColor rounded-md focus:outline-none"
                >
                  Enviar
                </button>
              </div>
            </div>
          )}
          {!responseData.status && responseData.mensagem && (
            <div className="py-10 mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300">
              <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
                Problema
              </h1>
              <p className="my-4 text-center text-sm text-gray-500">
                {responseData.mensagem}
              </p>
            </div>
          )}
          {responseData.status && (
            <div className="py-10 mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300">
              <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
                Obrigado!
              </h1>
              <p className="my-4 text-center text-sm text-gray-500">
                {responseData.mensagem}
              </p>
            </div>
          )}
        </div>

        <div className="lg:flex my-20 lg:flex-col lg:w-1/2 lg:mx-10">
          <p className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
            Contatos
          </p>

          <p className="mt-4 text-gray-700">
            Caso tenha entrado em contato via formulário e ainda não recebeu
            retorno, entre em contato com um dos responsáveis abaixo!
          </p>

          <div className="flex flex-col gap-3 mt-12">
            <div className="p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent hover:bg-mainColorLight">
              <div className="lg:flex">
                <div className="lg:mr-auto">
                  <p className="text-lg font-semibold text-gray-700 capitalize md:text-2xl">
                    {"Amelia Anderson"}
                  </p>
                  <p className="text-gray-600">{"Engenheira de Processos"}</p>
                </div>
                <div className="text-gray-600 py-2">
                  <span className="block">{"amelia.anderson@email.com"}</span>
                  <span>{"(21) 90000-0000"}</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-600">Onde posso colaborar?</p>
                <p className="text-gray-600 mt-1">
                  {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  nesciunt officia aliquam neque optio? Cumque facere numquam
                  est.`}
                </p>
              </div>
            </div>

            <div className="p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent hover:bg-mainColorLight">
              <div className="lg:flex">
                <div className="lg:mr-auto">
                  <p className="text-lg font-semibold text-gray-700 capitalize md:text-2xl">
                    {"João Marcelo"}
                  </p>
                  <p className="text-gray-600">{"Engenheira de Processos"}</p>
                </div>
                <div className="text-gray-600 py-2">
                  <span className="block">{"joao.marcelo@email.com"}</span>
                  <span>{"(21) 90000-0000"}</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-600">Onde posso colaborar?</p>
                <p className="text-gray-600 mt-1">
                  {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  nesciunt officia aliquam neque optio? Cumque facere numquam
                  est.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
