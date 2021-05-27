import React, { useState } from 'react';
import { Form, Row, Col, Button, Jumbotron, Modal } from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt'
import PropTypes from 'prop-types'
import ListarEstados from './listar-estados'
import ListarCidades from './listar-cidades'
import { Formik } from 'formik'

registerLocale('pt', pt)

function Checkout(props) {

    const [dataNascimento, setDataNascimento] = useState(null)
    const [formEnviado, setFormEnviado] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showErroModal, setShowErroModal] = useState(false)

    function visivel() {
        return props.visivel ? null : 'hidden'
    }

    function finalizarCompra(values) {

    }

    function handleDateNascimento(data) {
        setDataNascimento(data)
    }

    function datePickerCss() {
        if (!formEnviado) {
            return 'form-control'
        }

        if (dataNascimento) {
            return 'form-control is-valid'
        } else {
            return 'form-control is-invalid'
        }
    }

    return (
        <Jumbotron
            fluid
            style={{ margin: '10px' }}
            className={visivel()}>
            <h3 className="text-center">Finalizar compra</h3>

            <Formik
                onSubmit={(values) => finalizarCompra(values)}
                initialValues={{
                    email: '',
                    nomeCompleto: '',
                    cpf: '',
                    endereco: '',
                    cidade: '',
                    estado: '',
                    cep: '',
                    termosCondicoes: false,
                    emailPromocional: 'S'
                }}>
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors
                }) => (
                    <Form
                        noValidate
                        style={{ margin: '10px' }}
                        onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="email">
                            <Form.Label column sm={3}>
                                Email
                    </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="email"
                                    placeholder="Digite o seu email"
                                    name="email"
                                    data-testid="txt-email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && !!errors.email} />
                                <Form.Control.Feedback
                                    type="invalid">
                                    Digite um email válido.
                            </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="nomeCompleto">
                            <Form.Label column sm={3}>
                                Nome completo
                    </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite o seu nome completo"
                                    name="nomeCompleto"
                                    data-testid="txt-nome-completo"
                                    values={values.nomeCompleto}
                                    onChange={handleChange}
                                    isValid={touched.nomeCompleto && !errors.nomeCompleto}
                                    isInvalid={touched.nomeCompleto && !!errors.nomeCompleto} />
                                <Form.Control.Feedback
                                    type="invalid">
                                    Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="dataNascimento">
                            <Form.Label column sm={3}>
                                Data de Nascimento
                    </Form.Label>
                            <Col sm={9}>
                                <DatePicker
                                    locale="pt"
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Selecione a data"
                                    withPortal
                                    selected={dataNascimento}
                                    onChange={handleDateNascimento}
                                    className={datePickerCss()} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="cpf">
                            <Form.Label column sm={3}>
                                CPF
                    </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite o seu CPF"
                                    name="cpf"
                                    data-testid="txt=cpf"
                                    values={values.cpf}
                                    onChange={handleChange}
                                    isValid={touched.cpf && !errors.cpf}
                                    isInvalid={touched.cpf && !!errors.cpf} />
                                <Form.Control.Feedback type="invalid">
                                    Digite um CPF válido.
                        </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="endereco">
                            <Form.Label column sm={3}>
                                Endereço
                    </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite o seu endereço completo"
                                    name="endereco"
                                    data-testid="txt-endereco"
                                    values={values.endereco}
                                    onChange={handleChange}
                                    isValid={touched.endereco && !errors.endereco}
                                    isInvalid={touched.endereco && !!errors.endereco} />
                                <Form.Control.Feedback
                                    type="invalid">
                                    Digite o seu endereço.
                            </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="estado">
                            <Form.Label column sm={3}>
                                Estado
                    </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as="select"
                                    name="estado"
                                    data-testid="estado"
                                    values={values.estado}
                                    onChange={handleChange}
                                    isValid={touched.estado && !errors.estado}
                                    isInvalid={touched.estado && !!errors.estado}>
                                    <ListarEstados />
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Selecione o seu estado.
                        </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="cidade">
                            <Form.Label column sm={3}>
                                Cidade
                    </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as="select"
                                    name="cidade"
                                    data-testid="cidade"
                                    values={values.cidade}
                                    onChange={handleChange}
                                    isValid={touched.cidade && !errors.cidade}
                                    isInvalid={touched.cidade && !!errors.cidade}>
                                    <option value="">Selecione a cidade</option>
                                    <ListarCidades estado={'MG'} />
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Selecione a sua cidade.
                        </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="cep">
                            <Form.Label column sm={3}>
                                CEP
                    </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite o seu CEP"
                                    name="cep"
                                    data-testid="txt-cep"
                                    values={values.cep}
                                    onChange={handleChange}
                                    isValid={touched.cep && !errors.cep}
                                    isInvalid={touched.cep && !!errors.cep} />
                                <Form.Control.Feedback type="invalid">
                                    Digite o seu CEP.
                        </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="emailPromocional">
                            <Form.Label column sm={12}>
                                Deseja receber email com promoções?
                    </Form.Label>
                            <Form.Check
                                inline
                                name="emailPromocional"
                                type="radio"
                                id="promocaoSim"
                                value="S"
                                label="Sim"
                                style={{ marginLeft: '15px' }}
                                checked={values.emailPromocial === 'S'}
                                onChange={handleChange} />

                            <Form.Check
                                inline
                                name="emailPromocional"
                                type="radio"
                                id="promocaoNao"
                                value="N"
                                label="Não"
                                style={{ marginLeft: '15px' }}
                                checked={values.emailPromocial === 'N'}
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Row} controlId="termosCondicoes">
                            <Form.Check
                                name="termosCondicoes"
                                label="Concordo com os termos e condições"
                                style={{ marginLeft: '15px' }}
                                data-testid="check-termos-condicoes"
                                value={values.termosCondicoes}
                                onChange={handleChange}
                                isValid={touched.termosCondicoes && !errors.termosCondicoes}
                                isValid={touched.termosCondicoes && !!errors.termosCondicoes} />
                        </Form.Group>

                        <Form.Group as={Row} controlId="finalizarCompra">
                            <Col className="text-center" sm={12}>
                                <Button
                                    type="submit"
                                    variant="success"
                                    data-testid="btn-finalizar-compra">
                                    Finalizar compra
                        </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                )}
            </Formik>

            <Modal show={false} data-testid="modal-compra-sucesso">
                <Modal.Header closeButton>
                    <Modal.Title>Compra realizada com sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Um email de confirmação foi enviado com os detalhes da transação.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">
                        Continuar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={false} data-testid="modal-erro-comprar">
                <Modal.Header closeButton>
                    <Modal.Title>Erro ao processar pedido.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tente novamente em instantes.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning">
                        Continuar
                    </Button>
                </Modal.Footer>
            </Modal>


        </Jumbotron>
    )
}

Checkout.propTypes = {
    visivel: PropTypes.bool.isRequired,
    handleExibirProdutos: PropTypes.func.isRequired,
    total: PropTypes.string.isRequired,
    produtos: PropTypes.object.isRequired,
    handleLimparCarrinho: PropTypes.func.isRequired
}

export default Checkout;