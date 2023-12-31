import React from "react";
import "./landingPage.css";
import student from "../asset/asset.png";
import assetbook from "../asset/asset 5.png";
import lonceng from "../asset/lonceng.png";
import book from "../asset/book.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/navBar";

const landingPage = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="container">
        <div className="box-student">
          <img src={student} alt="" />
        </div>

        <div className="box-desk">
          <img src={assetbook} alt="" />
          <div className="text">
            <p className="detail-edm">
              Potensi yang dimiliki oleh setiap Individu harus digali dan
              dikembangkan sebagai bekal dimasa yang akan datang. Tentunya
              pengaruh peranan keluarga dalam menentukan tempat belajar anak
              sangat berpengaruh. Untuk dapat menggali dan mengoptimalkan
              potensinya, diperlukan proses belajar yang efektif dan metode
              pembelajaran yang mudah diserap. Hal ini penting agar secara
              efektif dapat meningkatkan motivasi belajar siswa.
              <br />
              <br />
              Edumatrix Indonesia adalah lembaga bimbingan belajar yang banyak
              diminati siswa baik dari usia dini, remaja maupun orang dewasa.
              Dengan sistem belajar privat 1 on 1 (satu guru satu siswa),
              memiliki program terlengkap, fasilitas belajar yang maksimal,
              dibimbing oleh Master Teacher expert dan berpengalaman di
              bidangnya membuat suasana belajar menjadi kondusif dan interaktif.
              Sehingga terbukti dari hasil belajar siswa yang terus meningkat
              secara signifikan.
            </p>
          </div>
        </div>

        <div className="box-program">
          <h1 className="title-program">
            Program Belajar Terlengkap untuk Usia Dini, Remaja dan Orang Dewasa
          </h1>
          <p className="detail-prog">
            Membutuhkan guru untuk pendampingan belajar dalam pengerjaan PR,
            pemahaman materi tertentu, atau persiapan untuk masuk ke instansi
            impian? Jangan khawatir, Master Teacher Edumatrix sudah
            berpengalaman mengajar dalam masing-masing bidangnya. Kami siap
            menyelesaikan berbagai kendala belajar siswa!
          </p>

          <div className="box-privat">
            <h1 className="title-privat">Privat</h1>
            <div className="group-privat">
              <div className="group-1">
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat SD
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat SMP
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat SMA
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat Mahasiswa
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat UTBK
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat UMPTKIN
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat LPDP
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat Ujian Mandiri
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat Sekolah Kedinasan
                </h4>
              </div>
              <div className="group-2">
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat BUMN
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat CPNS
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat TOEFL
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat IELTS
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat IUP
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat PPDS
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat Akpol
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} className="text-privat" />{" "}
                  Privat Akmil{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* ALASAN */}
        <div className="box-alasan">
          <img src={lonceng} className="lonceng" alt="" />
          <h1 className="text-alasan">
            Alasan mengapa Edumatrix Indonesia menjadi pilihan favorit di semua
            kalangan
          </h1>
        </div>

        <div className="content-alasan">
          <div className="paragraf-alasan">
            <p className="p-alasan">
              Belajar secara mandiri cenderung membosankan, apalagi tidak ada
              pengajar yang bisa melatih siswa untuk interaktif. Tapi kita juga
              harus selektif dan tepat dalam memilih pengajar lho. Berikut
              adalah alasan mengapa kamu harus memilih belajar di Edumatrix:
            </p>
          </div>
          <img src={book} className="img-alasan" alt="" />
        </div>
        <div className="6-alasan">
          <p className="text-6-alasan1">
            <strong>1. Master Teacher Expert dan Berpengalaman</strong>
            <br />
            Siswa bisa request pengajar laki-laki atau perempuan, kualifikasi
            akademik, latar belakang pendidikan, dan pengalaman yang dimiliki,
            sesuai preferensi siswa.
          </p>
          <p className="text-6-alasan">
            <strong>2. Sistem belajar 1 on 1 </strong>
            <br />
            Sistem belajar 1 guru 1 siswa sehingga lebih kondusif dan personal.
            Selain itu, pengajar dapat lebih fokus untuk menggali potensi siswa
          </p>
          <p className="text-6-alasan">
            <strong>3. Progress Report Bulanan </strong>
            <br />
            Mendapatkan laporan perkembangan selama sesi belajar dan riwayat
            sesi yang terealisasi, sehingga orang tua bisa memantau perkembangan
            belajar anak ditengah kesibukan pekerjaan
          </p>
          <p className="text-6-alasan">
            <strong>4. Waktu belajar fleksibel </strong>
            <br />
            Jadwal belajar menyesuaikan kebutuhan siswa, sehingga dipastikan
            tidak mengganggu aktivitas yang lain. Terutama Siswa yang
            berkebutuhan les BUMN, CPNS. Ini akan sangat membantu terutama bagi
            Siswa yang sedang bekerja.
          </p>
          <p className="text-6-alasan">
            <strong>5. Konsultasi gratis </strong>
            <br />
            Sampaikan kendala akademik dan kesulitan belajarmu, konsultan
            Edumatrix akan membantu kamu untuk meningkatkan kualitas dan rencana
            belajar yang lebih baik. Konsultasi dapat dilakukan secara tatap
            muka maupun online.
          </p>
          <p className="text-6-alasan">
            <strong>6. Tryout Progressive </strong>
            <br />
            Tujuannya untuk mengetahui real basic atau kemampuan dasar siswa.
            Selanjutnya akan ditentukan mapping atau tabulasi sebaran mapel yang
            harus dikuasai untuk meningkatkan skor akademik.
          </p>
        </div>

        {/* METODE */}
        <div className="box-metode">
          <img src={lonceng} className="lonceng" alt="" />
          <h1 className="text-metode">
            Berbagai Macam Kelebihan Metode Les Privat
          </h1>
        </div>

        <div className="desk-metode">
          <p className="paragraf-metode">
            Ada banyak opsi untuk belajar, salah satunya adalah belajar privat.
            Namun, mengapa harus memilih metode belajar les privat daripada
            metode belajar yang lain?
          </p>

          <div className="lima-metode">
            <p className="rincian-metode">
              <strong>Penyesuaian Soal Sesuai dengan Kemampuan Siswa</strong>
              <br />
              Salah satu kelebihan dari les privat adalah guru dapat mengetahui
              kebutuhan belajar Siswa dengan cara mengukur kemampuan Siswa.
              Soal-soal yang diberikan oleh Siswa kemudian dapat disesuaikan
              dengan level pemahaman Siswa. Tentor akan membimbing sampai Siswa
              mampu mengerjakan soal dengan kesulitan tinggi. Hal ini berbeda
              dengan belajar berkelompok. Dalam belajar berkelompok, soal yang
              dikerjakan memiliki tingkat kesulitan yang sudah ditentukan,
              sehingga ketika Siswa merasa soal tersebut terlalu sulit atau
              mudah, tidak ada opsi untuk menyesuaikan kesulitan soal tersebut.
            </p>
            <p className="rincian-metode">
              <strong>Pemahaman Mendalam terkait Materi Tertentu</strong>
              <br />
              Seringkali ketika belajar mandiri, Siswa menemukan kendala berupa
              kurang paham terkait materi tertentu. Dengan adanya tentor privat,
              Siswa dapat menanyakan materi tersebut kepada tentor sampai paham.
              Selanjutnya, Siswa dapat fokus untuk belajar materi tersebut di
              sesi ke depannya.
            </p>
            <p className="rincian-metode">
              <strong>
                Memastikan Siswa Tidak Tertinggal Materi di Sekolah
              </strong>
              <br />
              Dalam kelas banyak, persaingan akademis antara satu sama lain
              merupakan hal yang umum. Ketika ada materi dari guru yang kurang
              begitu dimengerti, ada kemungkinan beberapa Siswa malu menanyakan
              hal terkait. Hal ini dikarenakan Siswa memiliki ketakutan
              dipandang remeh oleh teman sebayanya, atau bahkan oleh gurunya
              sendiri. Disinilah guru privat memiliki peran yang penting untuk
              menjawab segala pertanyaan dari sang murid agar Siswa tidak
              tertinggal oleh materi sekolah.
            </p>
            <p className="rincian-metode">
              <strong>Terbentuknya Ikatan Antara Guru dan Murid</strong>
              <br />
              Selain memastikan materi tersampaikan dengan baik oleh Siswa,
              penting juga untuk memastikan kecocokan belajar antar Siswa
              terhadap guru. Ketika Siswa cocok dengan pembelajaran guru
              tersebut, Siswa akan lebih menikmati proses pembelajaran
              sehari-harinya. Dengan pembelajaran privat, hubungan antara guru
              dan Siswa akan terbangun waktu demi waktu dan membentuk suatu
              ikatan yang kuat antara guru dan siswa dalam belajar.
            </p>
            <p className="rincian-metode">
              <strong>Jadwal Fleksibel</strong>
              <br />
              Ketika belajar dengan jadwal tertentu, Siswa dapat dihadapkan oleh
              kendala tak terduga, berupa acara mendadak, sakit, dan lain lain.
              Dengan les privat, jadwal dapat disesuaikan dan tidak perlu
              khawatir akan ketinggalan materi. Tentor privat akan mengikuti
              penjadwalan Siswa untuk reschedule selanjutnya.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default landingPage;
