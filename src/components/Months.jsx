function Months(props) {
  return (
    <>
      <div>
        <ul className="grid grid-cols-4 gap-4">
          {props.savings.map((savings) => (
            <li key={savings.Mes}>
              <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h5 className="block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {savings.Mes}
                    </h5>
                    <a
                      href="#"
                      className="block font-sans text-xs font-bold leading-normal text-teal-600"
                    >
                      alterar
                    </a>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="flex items-center justify-between py-2 last:pb-0">
                      <div className="flex items-center gap-x-3">
                        <div className="text-start">
                          <h6 className="block font-sans text-xs font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Goal: {savings.Goal} MZN
                          </h6>
                          <h6 className="block font-sans text-xs font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            <input
                              type="number"
                              value={savings.Saved}
                              onChange={(e) =>
                                props.handleSavedChange(
                                  savings.Mes,
                                  +e.target.value
                                )
                              }
                              className="w-20 border border-gray-300 rounded px-2 py-1 text-xs"
                            />{" "}
                            MZN
                          </h6>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <p className="text-xs">progresso:</p>
                        <h6 className="block font-sans text-xs font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                          {props.calculateProgresso(
                            savings.Saved,
                            savings.Goal
                          )}
                          %
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Months;
