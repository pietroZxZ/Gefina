import { useState, useEffect} from 'react';

import { Invoice } from './invoiceType.ts'

import InvoiceTable from './InvoiceTable.tsx';


export default function App() {
    const [invoices,setInvoices] = useState<Invoice[]>([])
    const [error, setError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        async function getInvoices() {
          try{
              
              const response = await fetch ('/api/invoices')
        
              const datas = await response.json();
        
              setInvoices(datas);

          }catch{
            setError('falha ao buscar relacao de faturas')
        } finally {
            setLoading(false)
        }

        }
        

        getInvoices();
    }, []);
    if (error) return <p>{error}</p>
    
    return <>
        <h1>faturas</h1>
        {loading ? <p>carregando faturas...</p> : (
         error ? <p> {error}</p> : <InvoiceTable datas={invoices} />
        )}


        
   
        
    </>;
}
