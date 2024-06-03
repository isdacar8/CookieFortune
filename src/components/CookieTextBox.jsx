/* eslint-disable react/prop-types */

const CookieTextBox = ({ SelectedPhrase }) => {
  console.log(SelectedPhrase.author);
  return (
    <><div className="text-[0.7rem] font-bold sm:text-base sms:text-[0.8rem]  md:text-base lg:text-[1.1rem] xl:max-w-[600px] xl:text-2xl max-w-[400px] min-w-[240px]">
      <p>{SelectedPhrase.phrase}</p>
      <br />

    </div><div>

        <span className="text-center relative top-96 text-[0.7rem] font-bold sm:text-base sms:text-[0.8rem]  md:text-base lg:text-[1.1rem] xl:max-w-[600px] xl:text-2xl max-w-[400px] min-w-[240px] text-black">{SelectedPhrase.author}</span>
        <br />
      </div></>
       
  );
};

export default CookieTextBox;
