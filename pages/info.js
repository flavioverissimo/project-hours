import React from "react";
import PageTitle from "../components/PageTitle";

const Info = () => {
  return (
    <section className="container mx-auto my-20 py-8 px-12">
      <PageTitle title="Informações" />
      <div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl">
          Principais Informações
        </h1>

        <p className="max-w-2xl mx-auto mt-2 mb-16 text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>
      </div>

      <div className="overflow-hidden bg-white">
        <div className="border-t-4">
          <dl>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-700">
                O que fazer quando o problema X acontecer?
              </dt>
              <dd className="mt-1 text-sm text-gray-600 sm:col-span-2 sm:mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-700">
                O que fazer quando o problema X acontecer?
              </dt>
              <dd className="mt-1 text-sm text-gray-600 sm:col-span-2 sm:mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-700">
                O que fazer quando o problema X acontecer?
              </dt>
              <dd className="mt-1 text-sm text-gray-600 sm:col-span-2 sm:mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-700">
                O que fazer quando o problema X acontecer?
              </dt>
              <dd className="mt-1 text-sm text-gray-600 sm:col-span-2 sm:mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-700">
                O que fazer quando o problema X acontecer?
              </dt>
              <dd className="mt-1 text-sm text-gray-600 sm:col-span-2 sm:mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-500">
              <dt className="text-sm text-white font-bold">
                Como fazer inserção de projetos
              </dt>
              <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 rounded-md border border-white"
                >
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm text-white">
                    <div className="flex w-0 flex-1 items-center">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 w-0 flex-1 truncate">
                        inserir_dados_projeto.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium">
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Info;
