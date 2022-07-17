import Image from 'next/image'

const Featured = ()=> (

    <div className="p-1 md:p-10 xl:p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
    <div className="rounded overflow-hidden shadow-lg">
      <h3 className="font-bold text-xl text-red-700">Featured Team</h3>
      <Image 
        src="/assets/images/alfaromeo.png"
        title="Alfarome is the featured team"
        alt="Alpharomeo track image"
        loading='lazy'
        width="962"
        height="595"
      ></Image>
      
      <div className="px-6 py-4 max-h-200">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">
          BAHRAIN, BAHRAIN - MARCH 11: Valtteri Bottas of Finland driving
          the (77) Alfa Romeo F1 C42 Ferrari on track during Day Two of F1
          Testing at Bahrain International Circuit on March 11, 2022 in
          Bahrain, Bahrain.
        </p>
      </div>
    </div>

    <div className="rounded overflow-hidden shadow-lg">
      <h3 className="font-bold text-xl text-red-700">Driver Spotlight</h3>
      <img
     
      />
       <Image 
          src="/assets/images/driver-spotlight.png"
          title="Valtteri and Zhou"
          alt="Valtteri and Zhou - driver spotlight winner"
        loading='lazy'
        width="962"
        height="595"
      ></Image>

      <div className="px-6 py-4 max-h-200">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">
          Making his F1 debut with Williams in 2013, Bottas soon became part
          of the family. Points and podiums followed with the reliable racer
          even amassing the most points without a win, a record he resented
          but that showcased his ability.
        </p>
      </div>
    </div>
  </div>   

)


export  {Featured};