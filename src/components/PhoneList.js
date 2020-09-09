import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from 'react-bootstrap';

import { fetchPhones } from "../actions";

import Loading from './Loading';
import Error from './Error';
import PhoneItem from './PhoneItem';

export function PhoneList({phones, loading, error, fetchPhones}) {

  useEffect(() => {
    fetchPhones();
    }, [fetchPhones])

  return (
    <Container className="my-4">
      {loading && <Loading />}
      {error && <Error error={error} />}
      {phones.map((phone) => {
        return <PhoneItem key={phone.id} phone={phone} />;
      })}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    phones: state.phonesData.phones,
    loading: state.phonesData.loading,
    error: state.phonesData.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhones: () => dispatch(fetchPhones())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PhoneList);
