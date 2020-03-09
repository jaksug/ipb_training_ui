import { Card, Col, Layout, Menu, Row, Tabs, Typography, Affix, Button } from 'antd';
import React from 'react';
import IFooter from "../components/footer";
import IHeader from "../components/header";
import './index.scss';

const { Title, Text } = Typography;
const { Meta } = Card;
const { Content } = Layout;
const axios = require('axios');
const domain = 'https://ipbtraining.com'
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

class Faq extends React.Component {
    state = {
        current: 'pendaftaran',
        top: 50,
        bottom: 10,
    };

    componentDidMount() {


    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };



    render() {
        const { top_trainings, new_trainings, categories } = this.state;



        return (
            <Layout>
                <IHeader sendData={this.getData} />
                <Content style={{ marginTop: 54 }}>

                    <Row>
                        <Col span={24} offset={0}

                        >
                            <Row >
                                <Col
                                    style={{ padding: '10px 0px' }}
                                    offset={4}
                                    xs={16} sm={16} md={16} lg={5} xl={5}
                                >
                                    <img
                                        style={{
                                            width: '324px',
                                            height: '426px',
                                            objectFit: 'contain'
                                        }}
                                        src="https://ipbtraining.com/images/frontend/sitting@2x.png"
                                    />
                                </Col>
                                <Col
                                    xs={24} sm={24} md={24} lg={13} xl={13}
                                    style={{
                                        padding: '100px 20px',
                                        textAlign: 'right'
                                    }}>
                                    <Title
                                        level={2}
                                        style={{ fontFamily: 'Playfair Display' }}
                                    >
                                        Frequently Asked
                                    </Title>
                                    <Title style={{
                                        fontSize: '80px',
                                        marginTop: '-10px'
                                    }}>Questions</Title>
                                </Col>
                            </Row>
                            <Affix offsetTop={this.state.top}>
                                <Row
                                    className="faq"
                                >
                                    <Col span={10} offset={7}>

                                        <Menu
                                            onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                                            <Menu.Item key="pendaftaran">
                                                <a href="#pendaftaran" >
                                                    Pendaftaran
                                            </a>
                                            </Menu.Item>
                                            <Menu.Item key="fasilitas" >
                                                <a href="#fasilitas" >
                                                    Fasilitas
                                            </a>
                                            </Menu.Item>

                                            <Menu.Item key="pembayaran">
                                                <a href="#pembayaran">
                                                    Pembayaran
                                            </a>
                                            </Menu.Item>
                                            <Menu.Item key="refund">
                                                <a href="#refund" >
                                                    Refund dan Penggantian Peserta
                                            </a>
                                            </Menu.Item>
                                        </Menu>




                                    </Col>
                                </Row>
                            </Affix>

                        </Col>
                    </Row>
                    <Row
                        id="pendaftaran"
                        style={
                            {
                                marginTop: '60px'
                            }
                        }
                    >
                        <Col
                            span={18} offset={3}

                        >
                            <Title level={4} >Pendaftaran</Title>
                        </Col>
                        <Col span={21}>
                            <Row
                                style={
                                    {
                                        marginTop: '30px',
                                        background: '#f7f9fc',
                                        marginBottom: ' 30px',
                                        padding: '30px',
                                        borderRadius: '0px 50px 50px 0px'
                                    }
                                }
                            >
                                <Col
                                    span={20}
                                    offset={3}
                                >
                                    <Text strong>Bagaimana jika saya membutuhkan surat undangan resmi terkait pelaksanaan pelatihan?</Text>
                                    <br />
                                    <Text>Apabila peserta membutuhkan surat undangan resmi dapat menghubungi IPB Training via telepon (0251) 8382223/ 837 2400.</Text>
                                    <br />
                                    <br />
                                    <Text strong>Bagaimana jika saya membutuhkan pelatihan khusus bagi instansi saya?</Text>
                                    <br />
                                    <Text>IPB Training dapat memfasilitasi pelatihan khusus untuk instansi anda dengan menyesuaikan modul, studi kasus, hingga lokasi pelaksanaan. Hubungi contact center kami (0251) 838 2223/ 837 2400.</Text>


                                    <br />
                                    <br />
                                    <Text strong>Bagaimana cara mendaftar pelatihan di IPB Training? </Text>
                                    <br />
                                    <Text>IPB Training dapat memfasilitasi pelatihan khusus untuk instansi anda dengan menyesuaikan modul, studi kasus, hingga lokasi pelaksanaan. Hubungi contact center kami (0251) 838 2223/ 837 2400.</Text>



                                    <br />
                                    <br />
                                    <Text strong>Bagaimana jika saya lupa password?</Text>
                                    <br />
                                    <Text>Klik tombol login pada halaman utama (home page), lalu klik “saya lupa password” pada kolom login setelah itu masukkan alamat email yang digunakan saat mendaftarkan akun dan klik tombol send password reset link. Silakan cek email untuk mereset password (menggantinya dengan password baru) anda.</Text>




                                    <br />
                                    <br />
                                    <Text strong>Berapa batas maksimal pendaftaran pelatihan oleh satu akun dalam satu kali transaksi?</Text>
                                    <br />
                                    <Text>Satu akun dapat digunakan untuk mendaftar maksimal 20 orang peserta pelatihan</Text>


                                    <br />
                                    <br />
                                    <Text strong>Apa perbedan pendaftaran secara personal dan instansi/ lembaga?</Text>
                                    <br />
                                    <Text>Perbedaannya terletak pada penagihan biaya pelatihan. Apabila mendaftar mewakili instansi maka invoice akan ditagihkan ke instansi yang bersangkutan sedangkan jika daftar secara personal maka invoice ditagihkan kepada pendaftar.</Text>


                                    <br />
                                    <br />
                                    <Text strong>Bagaimana jika instansi membutuhkan faktur pajak?</Text>
                                    <br />
                                    <Text>Apabila instansi/lembaga membutuhkan faktur pajak, mohon dapat memilih “ya” pada kolom “butuh faktur pajak?” lalu mengisi kolom NPWP instansi saat melakukan pendaftaran. Setelah pendaftaran sukses maka otomatis nilai tagihan di invoice akan ditambah 10% PPn, setelahnya faktur pajak akan dikirimkan email. </Text>



                                    <br />
                                    <br />
                                    <Text strong>Penting diketahui bahwa alamat perusahaan harus sesuai dengan lamat yang tertera pada kartu NPWP.</Text>

                                </Col>

                            </Row>

                        </Col>
                    </Row>


                    <Row
                        style={
                            {
                                marginTop: '60px'
                            }
                        }
                        id="fasilitas"
                    >
                        <Col
                            span={21} offset={3}

                        >
                            <Title level={3} >Fasilitas</Title>
                        </Col>

                        <Row>

                            <Col
                                span={3}>

                            </Col>
                            <Col span={21} >
                                <Row
                                    style={
                                        {
                                            marginTop: '30px',
                                            background: '#f7f9fc',
                                            marginBottom: ' 30px',
                                            padding: '30px',
                                            borderRadius: '50px 0px 0px 50px'
                                        }
                                    }
                                >
                                    <Col
                                        span={20}
                                        offset={3}
                                    >
                                        <Text strong>Apa saja fasilitas yang diperoleh dalam mengikuti pelatihan?</Text>
                                        <br />
                                        <Text>Fasilitas yang didapatkan meliputi diskusi dengan trainer, ruang pelatihan lengkap dengan wifi dan pendingin ruangan, sertifikat diterbitkan oleh IPB Training, softfile materi, training kit, souvenir, 2x coffee break, dan makan siang. Khusus peserta menginap memperoleh makan pagi dan transportasi dari dan ke lokasi pelatihan.</Text>
                                        <br />
                                        <br />
                                        <Text strong>Bagaimana jika mendaftar termasuk akomodasi penginapan</Text>
                                        <Text>Cukup memilih “ya” pada pilihan penginapan dilanjutkan dengan jumlah kamar pada saat mendaftar.</Text>
                                        <br />
                                        <br />
                                        <Text strong>Fasilitas apa saja yang didapatkan jika memilih penginapan melalui panitia? </Text>
                                        <br />
                                        <Text>Panitia akan menyiapkan penginapan dengan durasi menginap sesuai lama pelaksanaan training (training 3 hari berarti menginap 3 malam) dengan tanggal check-in pada H-1 kegiatan pelatihan. Tipe kamar yang disediakan adalah tipe kamar superior (dapat diisi untuk 2 orang jika dibutuhkan) dan disediakan juga transportasi antar jemput dari lokasi penginapan ke tempat pelatihan.</Text>



                                        <br />
                                        <br />
                                        <Text strong>Dimana penginapan yang disediakan oleh panitia?</Text>
                                        <br />
                                        <Text>Penginapan disediakan di IPB Hotel (bintang 3) berlokasi di sebelah mall botani square Baranangsiang Bogor (pusat kota).</Text>




                                        <br />
                                        <br />
                                        <Text strong>Apa yang dimaksud dengan extend dalam penginapan?</Text>
                                        <br />
                                        <Text>Apabila peserta membutuhkan perpanjangan masa penginapan, peserta dapat memilih extend dan memasukkan jumlah hari tambahan yang dibutuhkan.</Text>



                                    </Col>

                                </Row>

                            </Col>
                        </Row>
                    </Row>






                    <Row
                        style={
                            {
                                marginTop: '60px'
                            }
                        }
                    >
                        <Col
                            span={18} offset={3}
                            id="pembayaran"
                        >
                            <Title level={4} >Pembayaran</Title>
                        </Col>
                        <Col span={21}>
                            <Row
                                style={
                                    {
                                        marginTop: '30px',
                                        background: '#f7f9fc',
                                        marginBottom: ' 30px',
                                        padding: '30px',
                                        borderRadius: '0px 50px 50px 0px'
                                    }
                                }
                            >
                                <Col
                                    span={20}
                                    offset={3}
                                >
                                    <Text strong>Saya memiliki kode voucher dan sudah menggunakannya tapi mengapa biaya tidak berkurang?</Text>
                                    <br />
                                    <Text>Nilai kode voucher yang dimasukkan akan muncul saat invoice terbit di bagian akhir tahap pendaftaran.</Text>
                                    <br />
                                    <br />
                                    <Text strong>Bagaimana cara pembayaran biaya pelatihan?</Text>
                                    <br />
                                    <Text>Pembayaran biaya pelatihan dilakukan melalui transfer ke bank dan nomer rekening sesuai dengan yang tertera pada invoice. Nominal pembayaran sesuai angka yang ditagihkan pada invoice (hingga tiga digit terakhir).</Text>


                                    <br />
                                    <br />
                                    <Text strong>Apakah saya diberitau jika pembayaran telah berhasil?</Text>
                                    <br />
                                    <Text>Jika peserta telah berhasil melakukan pembayaran sesuai nilai pada invoice (hingga tiga digit terakhir) maka sistem akan mengirimkan pemberitahuan dan kwitansi ke email pendaftar.</Text>



                                    <br />
                                    <br />
                                    <Text strong>Apa yang dimaksud dengan kode unik dalam invoice?</Text>
                                    <br />
                                    <Text>Kode unik yang ada dalam invoice merupakan tiga digit terakhir nilai yang ditagihkan dalam invoice.</Text>




                                    <br />
                                    <br />
                                    <Text strong>Berapa lama tenggat waktu yang diberikan untuk pembayaran setelah invoice terbit?</Text>
                                    <br />
                                    <Text>Waktu yang diberikan untuk pembayaran setelah invoice diterbitkan adalah 3x24 jam.</Text>


                                    <br />
                                    <br />
                                    <Text strong>Apa perbedan pendaftaran secara personal dan instansi/ lembaga?</Text>
                                    <br />
                                    <Text>Perbedaannya terletak pada penagihan biaya pelatihan. Apabila mendaftar mewakili instansi maka invoice akan ditagihkan ke instansi yang bersangkutan sedangkan jika daftar secara personal maka invoice ditagihkan kepada pendaftar.</Text>


                                    <br />
                                    <br />
                                    <Text strong>Apakah diperbolehkan jika pembayaran melebihi batas waktu dalam invoice?</Text>
                                    <br />
                                    <Text>Mohon dapat berkomunikasi dengan penanggungjawab pealtihan jika terdapat kendala dalam waktu pembayaran (di luar tenggat waktu yang disediakan). </Text>

                                </Col>

                            </Row>

                        </Col>
                    </Row>


                    <Row
                        style={
                            {
                                marginTop: '60px'
                            }
                        }
                        id="refund"
                    >
                        <Col
                            span={21} offset={3}

                        >
                            <Title level={3} >Refund dan Penggantian Peserta</Title>
                        </Col>

                        <Row>

                            <Col
                                span={3}>

                            </Col>
                            <Col span={21} >
                                <Row
                                    style={
                                        {
                                            marginTop: '30px',
                                            background: '#f7f9fc',
                                            marginBottom: ' 60px',
                                            padding: '30px',
                                            borderRadius: '50px 0px 0px 50px'
                                        }
                                    }
                                >
                                    <Col
                                        span={20}
                                        offset={3}
                                    >
                                        <Text strong>Bagaimana jika saya tidak jadi mengikuti pelatihan, tapi telah melakukan pembayaran, apakah dana dapat di refund? </Text>
                                        <br />
                                        <Text>Sesuai dengan syarat dan ketentuan saat melakukan pendaftaran, seluruh dana yang telah dibayarkan tidak dapat di refund. Kecuali terjadi pembatalan atau pemindahan jadwal pelatihan yang dikonfirmasi oleh panitia pada H-7 pelatihan.</Text>
                                        <br />
                                        <br />
                                        <Text strong>Bagaimana jika saya (peserta yang saya daftarkan) tidak dapat hadir pada pelatihan dan hendak digantikan oleh orang lain?</Text>
                                        <Text>Pendaftar cukup melakukan edit nama dan kontak peserta pada menu data peserta (setelah login) serta melakukan konfirmasi pada penanggungjawab pelatihan.</Text>


                                    </Col>

                                </Row>

                            </Col>
                        </Row>
                    </Row>




                </Content>
                <IFooter />
            </Layout>

        );
    }
}

export default Faq;