import AddressLayout from 'src/components/profile/Address';
import ProfileLayout from 'src/components/profile/layout';

const Address = () => {
  return (
    <>
      <ProfileLayout>
        <AddressLayout />
      </ProfileLayout>
    </>
  );
};
Address.setPageConfig = {
  private: true
};

export default Address;
