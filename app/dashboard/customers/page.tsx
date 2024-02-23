import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customersList = await fetchFilteredCustomers('');
  
  return (
    <>
      <CustomersTable customers={customersList} />
    </>
  );
}
