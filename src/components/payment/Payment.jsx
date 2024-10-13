import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const countries = ['Pakistan', "India", 'Japan', 'Australia', 'England']
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()
    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                color: '#303238',
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                '::placeholder': {
                    color: '#aab7c4',
                },
                ':focus': {
                    color: '#424770',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
            complete: {
                color: '#4caf50',
            },
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            console.error(error);
            // Handle error
        } else {
            console.log('PaymentMethod created:', paymentMethod);
            // Handle paymentMethod (e.g., send to your server)
            navigate('/')
        }
    }
    return (
        <>
            {/* <div className='border-2 flex flex-col h-[100vh] justify-center items-center shadow-lg w-[50%] m-auto'> */}
            <h2 className=' text-2xl font-bold mb-4'>Pay with card</h2>
            <form action="" className='fom flex flex-col gap-3 items-center' onSubmit={handleSubmit}>
                <div className=' flex flex-col mb-3 w-[350px]'>
                    <label htmlFor="email" className=''>Email</label>
                    <input type="email" name='email' id='email' placeholder='' className='border shadow-sm focus:border-blue-400 px-2 py-1 rounded outline-none' required />
                </div>
                <div className=' flex flex-col mb-3  w-[350px]'>
                    <label htmlFor="cardnumber" className=''>Card details</label>
                    {/* <input type="number" name='cardnumber' id='cardnumber' className='border shadow-sm focus:border-blue-400 px-2 py-1 rounded outline-none' required /> */}
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </div>
                <div className=' flex flex-col mb-3  w-[350px]'>
                    <label htmlFor="cardholder" className=''>Cardholder name</label>
                    <input type="text" name='cardholder' id='cardholder' className='border shadow-sm focus:border-blue-400 px-2 py-1 rounded outline-none' required />
                </div>
                <div className=' flex flex-col mb-3 w-[350px]'>
                    <label htmlFor="cardholder" className=''>Country</label>
                    <select name="" id="" className='w-full border shadow-sm focus:border-blue-400 px-2 py-2 rounded outline-none '>
                        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                <div className='mb-4'>
                    <Button type='submit' variant='contained'>Pay</Button>
                </div>
            </form>
            {/* </div> */}
        </>
    )
}

export default PaymentForm
