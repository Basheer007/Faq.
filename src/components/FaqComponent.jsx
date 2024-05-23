

const FaqComponent = ({ question, answers, func, isopen }) => {

    return (
        <div>
            <h1 onClick={func} className='px-2 bg-[#ffbe76] cursor-pointer hover:bg-[#f6e58d] transition-colors duration-150 ease-in-out delay-75  py-1 text-2xl capitalize'>{question}</h1>
            <div>
                <p className={`${isopen ? 'max-h-[200px] p-2' : 'max-h-0'} bg-[#f0932b] overflow-hidden transition-all duration-200 ease-out`} >
                    {answers}
                </p>
            </div>
        </div>
    )
}

export default FaqComponent
