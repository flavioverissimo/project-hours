import React from "react";
import PageTitle from "../components/PageTitle";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Projetos = () => {
  const { data, error } = useSWR("./api/projectData", fetcher);
  console.log(data);

  return (
    <section className="container mx-auto my-20 bg-colorNow py-8 px-12">
      <PageTitle title="Projetos" />
      <div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl">
          Projetos em Andamento
        </h1>

        <p className="max-w-2xl mx-auto mt-2 mb-20 text-center text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>
      </div>

      <div className="grid gap-8 mt-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        {!data && <p>Carregando!</p>}
        {data &&
          data.map((el) => {
            return (
              <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md">
                <span className="text-sm font-light text-gray-600">
                  {el.Data}
                </span>
                <div className="mt-2 text-gray-600">
                  <p className="text-xl font-bold">
                    <span className="mr-4 text-lg bg-gray-500 text-white px-2 py-1">
                      {`Nº ${el.Codigo}`}
                    </span>
                    {el.Nome}
                  </p>
                  <p className="mt-2">{el.Descricao}</p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Projetos;
