import { GiftTopIcon } from "@heroicons/react/24/outline";

const CertifacteCard = (props) => {
  return (

      <div className="max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <GiftTopIcon class="h-10 w-10 text-gray-500" />
        <div>
          <h5 className="mb-2 text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          {props.data.title}
          </h5>
        </div>
        <p className="mb-3 font-normal tracking-wider text-gray-500 dark:text-gray-400">{props.data.desc}</p>
      </div>
  );
};

export default CertifacteCard;
