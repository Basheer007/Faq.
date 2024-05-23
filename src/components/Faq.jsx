import React from 'react'
import FaqComponent from './FaqComponent'
import { useState } from 'react'
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)
    function handleFaq(index) {
        setOpenIndex(index === openIndex ? null : index)

    }
    const data = [
        {
            id: 1,
            title: 'why react ?',
            answers: `Using React for your example makes sense for a number of reasons:
            Component-Based Architecture: React promotes a modular and reusable component-based architecture. This makes it easy to break down your UI into smaller, manageable pieces that can be reused across your application.
            State Management: React's state management capabilities allow you to easily handle dynamic UI changes. In your example, toggling the FAQ content visibility is straightforward with React's state.`
        },
        {
            id: 2,
            title: 'why fullstack ?',
            answers: `While some prefer the artistic and creative side of web development, others are drawn to the technical one. There’s a third group of people who are masters of both these aspects. The first group is that of front-end developers, the second is of back-end developers, and the third that of full-stack developers`
        },
        {
            id: 3,
            title: 'salary of a fullstack?',
            answers: `According to ZipRecruiter, the average salary of an entry-level full-stack developer is $58,040 annually in the US. For mid-level developers, it is $97,500 a year, and $116,504 for experienced ones. Even Indeed points out that the average annual salary figure sits at $113,462 a year in the US, and between £40,000 - £70,000 in the UK.`
        },
    ]


    return (
        <main className='bg-[#badc58] min-h-screen flex flex-col '>
            <h1 className='p-3 text-3xl'>FAQ.</h1>
            <div className='flex flex-col gap-3'>
                {data.map((faq, index) => <FaqComponent
                    key={faq.id}
                    question={faq.title}
                    answers={faq.answers}
                    func={() => handleFaq(index)}
                    isopen={index === openIndex}
                />)}
            </div>
        </main>

    )
}

export default Faq
