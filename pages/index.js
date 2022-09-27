import React, { useState } from "react";
import moment from "moment";
import Information from "../components/Information";
import PageTitle from "../components/PageTitle";

const Index = () => {
  const [formValues, setNewValues] = useState({
    Nome: "",
    Projeto: "",
    Horas: "",
    Data: "",
  });
  const [hoursWorked, setNewHoursWorked] = useState([]);
  const [responseData, setResponseData] = useState(false);
  const [newMessage, setMessage] = useState({
    status: false,
    mensagem: "",
  });

  const onChange = (e) => {
    const key = e.target.name;
    let value = e.target.value;

    setNewValues((old) => ({
      ...old,
      [key]: value,
    }));
  };

  const addData = () => {
    const keys = Object.keys(formValues);
    const status =
      keys.filter((el) => formValues[el] !== "").length < keys.length
        ? false
        : true;
    const amountValues = hoursWorked.length;

    if (status && amountValues < 3) {
      setMessage({
        status: false,
        mensagem: "",
      });
      const values = {
        ...formValues,
        _id: parseInt(moment().format("YYMMDDHHmmssSSS")).toString(16),
      };
      const hours = [...hoursWorked];
      hours.unshift(values);

      setNewHoursWorked(hours);
      setNewValues({
        Nome: "",
        Projeto: "",
        Horas: "",
        Data: "",
      });
    }

    if (!(amountValues < 3)) {
      setMessage({
        status: true,
        mensagem:
          "O valor máximo de items é 3. Caso queira inserir mais, envie os que já foram adicionados.",
      });
    }

    if (!status) {
      setMessage({
        status: true,
        mensagem: "Por gentileza, preencher todos os campos.",
      });
    }
  };

  const saveData = async () => {
    try {
      const response = await fetch("/api/save-hours", {
        method: "POST",
        body: JSON.stringify(hoursWorked),
      });

      const data = await response.json();
      setNewValues({
        Nome: "",
        Projeto: "",
        Horas: "",
        Data: "",
      });
      setNewHoursWorked([]);
      setResponseData(data);

      setTimeout(() => {
        setResponseData(false);
      }, 3000);
    } catch (e) {}
  };

  const deleteItem = (e) => {
    const _id = e.target.value;
    const newHoursWorked = hoursWorked.filter((el) => el._id !== _id);
    setNewHoursWorked(newHoursWorked);
  };

  return (
    <section className="container mx-auto py-20 lg:flex">
      <PageTitle title="Seja Bem Vindo" />
      <div className="flex flex-col justify-center w-full p-8 lg:px-10 xl:pl-20 xl:pr-32 lg:w-1/2">
        <p className="text-3xl font-semibold text-gray-800 lg:text-4xl">
          Controle de Projeto
        </p>

        <p className="mt-4 text-gray-500">
          O formulário abaixo é utilizado para controle de horas por projeto.
          Por gentileza, preencher corretamente.
        </p>

        {newMessage.status && <Information mensagem={newMessage.mensagem} />}

        <div className="flex flex-col gap-6 mt-6 md:mt-8">
          <div>
            <label className="block mb-2 text-sm text-gray-600">Nome</label>
            <input
              type="text"
              name="Nome"
              value={formValues.Nome}
              placeholder="João Marcelo"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-green-600 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={onChange}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-600">Projeto</label>
            <input
              type="text"
              name="Projeto"
              value={formValues.Projeto}
              placeholder="215 - Projeto de Saneamento Básico"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-green-600 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={onChange}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-600">
              Horas Trabalhadas
            </label>
            <input
              type="time"
              name="Horas"
              value={formValues.Horas}
              className="block w-full px-5 py-3 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-green-600 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={onChange}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-600">Data</label>
            <input
              type="date"
              name="Data"
              value={formValues.Data}
              className="block w-full px-5 py-3 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-green-600 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={onChange}
            />
          </div>

          <button
            onClick={addData}
            className="flex items-center justify-center gap-2 mt-4 text-sm font-medium tracking-wide text-mainColor capitalize transition-colors duration-300 transform focus:outline-none"
          >
            <span className="font-bold px-2 block flex items-center justify-center text-center bg-mainColor text-mainColorLight rounded-full">
              +
            </span>
            Adicionar
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full p-8 lg:px-10 xl:pr-20 lg:w-1/2 relative">
        <div className="flex-1 flex-col gap-3">
          {responseData && (
            <div className="py-10 mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
              <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
                Obrigado!
              </h1>
              <p className="my-4 text-center text-sm text-gray-500">
                {responseData.mensagem}
              </p>
            </div>
          )}
          {hoursWorked.length === 0 && !responseData && (
            <p className="text-center py-12">Nenhum valor foi inserido!</p>
          )}
          {hoursWorked.length !== 0 &&
            hoursWorked.map((el) => (
              <div key={el._id} className="bg-white my-6">
                <div className="grid grid-cols-2 gap-4 p-6">
                  <div className="flex flex-row text-sm">
                    <span className="mr-3"></span>
                    <p className="flex items-center text-gray-500">
                      <span className="font-semibold mr-2 text-xs uppercase">
                        Nome:
                      </span>
                      <span>{el.Nome}</span>
                    </p>
                  </div>

                  <div className="flex flex-row text-sm">
                    <span className="mr-3"></span>
                    <p className="flex items-center  text-gray-500">
                      <span className="font-semibold mr-2 text-xs uppercase">
                        Data:
                      </span>
                      <span>{el.Data}</span>
                    </p>
                  </div>

                  <div className="flex flex-row text-sm">
                    <span className="mr-3"></span>
                    <p className="flex items-center  text-gray-500">
                      <span className="font-semibold mr-2 text-xs uppercase">
                        Projeto:
                      </span>
                      <span>{el.Projeto}</span>
                    </p>
                  </div>

                  <div className="flex flex-row text-sm">
                    <span className="mr-3"></span>
                    <p className="flex items-center  text-gray-500">
                      <span className="font-semibold mr-2 text-xs uppercase">
                        Horas Trabalhadas:
                      </span>
                      <span>{el.Horas}</span>
                    </p>
                  </div>
                </div>

                <hr />

                <button
                  value={el._id}
                  onClick={deleteItem}
                  className="block w-full text-center cursor-pointer uppercase text-xs flex items-center justify-center font-semibold py-3"
                >
                  <div className="mr-2"></div>
                  Remove
                </button>
              </div>
            ))}
        </div>
        {hoursWorked.length !== 0 && (
          <button
            onClick={saveData}
            className="block bg-mainColor text-mainColorLight w-full text-center cursor-pointer uppercase text-xs flex items-center justify-center font-semibold py-3"
          >
            Enviar os Dados
          </button>
        )}
      </div>
    </section>
  );
};

export default Index;
