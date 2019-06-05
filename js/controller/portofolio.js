app.controller("portofolio",["$scope",'$rootScope','browserService','$state',function($scope,$rootScope,browserService,$state){
   $rootScope.content = "Portofolio";
   
   if(browserService.isMobileBrowser()){
          $state.go('notification');
    }

   $scope.isFirst = function(index){
      if(index == 0){
         return 'active'
      }
   }
   
   $scope.showImage = function(src){
        $("#image_modal").attr("src","assets/"+src);
        $("#myModal").modal('show');
   }

   $scope.data = [
      {
      	id    : 0,
      	judul : "SISTEM PERMINTAAN ORDER KERJA TRANSPORTASI",
        keterangan : "Web | PHP, Codeiginiter, HTML, JavaScript, CSS, MySQL",
        deskripsi  : 'Sistem permintaan order kerja transportasi (SIPOK_T) adalah suatu sistem informasi yang saya kembangkan bersama dengan kedua teman saya pada saat kami mengikuti kegiatan kerja praktik di PT PUPUK SRWIDJAJA. Sistem ini digunakan oleh departemen ( sarana dan umum ) untuk memudahkan aktivitas mereka dalam mengelola permintaan perbaikan kendaraan yang berada di lingkungan PT PUPUK SRWIDJAJA. Sistem ini kami kembangkan sebagai bagian dari aktivitas kami selama mengikuti kegiatan kerja praktik di PT PUPUK SRIWIDJAJA. Sistem ini memiliki dua jenis user yaitu operator departemen (sarana dan umum) dan unit kerja lain yang ada di PT PUPUK SRIWIDJAJA.',
        foto       : ['halaman_login.jpg','halaman_dashboard.jpg','halaman_dashboard_unit_kerja.jpg'],
        url        : ''
      },
      {
      	id    : 1,
      	judul : "APLIKASI KLASIFIKASI PENYAKIT PARKINSON",
        keterangan : "Dekstop | Java, MySQL",
        deskripsi  : 'Aplikasi ini merupakan salah satu perangkat lunak yang saya kerjakan seorang diri dengan menggunakan bahasa pemrograman java dan IDE netbeans. Perangkat lunak ini ditujukan sebagai alat penelitian untuk mengetahui pengaruh dari algoritma particle swarm optimization dalam mengoptimasi algoritma klasifikasi naive bayes yang ditinjau sisi akurasi-nya.',
        foto       : ['halaman_dashboard_nbpso.jpg'],
        url        : 'https://github.com/Mhakimamransyah/NBPSO'
      },
      {
      	id    : 2,
      	judul : "APLIKASI PREDIKSI CUACA",
        keterangan : "Dekstop | Java, MySQL",
        deskripsi  : 'Aplikasi ini saya kerjakan seorang diri sebagai alat penelitian untuk menyelsesaikan program strata-1 saya di teknik informatika Universitas Sriwijaya. Dalam aplikasi ini saya menggunakan metode jaringan saraf tiruan dengan algoritma pelatihan backpropagation levenberg marquardt yang dioptimasi menggunakan algortima cuckoo search. Aplikasi ini saya kembangkan dengan menggunakan bahasa pemrograman java dan IDE netbeans.',
        foto       : ['halaman_pelatihan_prediksi_cuaca.jpg','halaman_pengujian_prediksi_cuaca.jpg'],
        url        : 'https://github.com/Mhakimamransyah/CSLM-Cuckoo-Search-Backpropagation-Levenberg-Marquardt-'
      },
      {
      	id    : 3,
      	judul : "APLIKASI PERANGKINGAN CALON PENERIMA BANTUAN DENGAN METODE MULTI FACTOR EVALUATION PROCESS DAN WP WEIGHTED PRODUCT",
        keterangan : "Web | PHP, Codeiginiter, HTML, JavaScript, CSS, MySQL",
        deskripsi  : 'Aplikasi ini merupakan sebuah perangkat lunak yang saya kerjakan untuk sebuah proyek penelitian. Aplikasi ini bertujuan untuk merangking calon penerima bantuan pada sebuah desa dimana faktor dan data calon penerima bantuan telah terlebih dahulu di masukkan. Terdapat dua aktor pada sistem yakni kepala desa dan admin. Pada aplikasi ini fokus tujuan utamanya adalah melihat akurasi perbandingan kedua metode MFEP dan WP apabila dibandingkan dengan rangking manual dari kepala desa.',
        foto       : ['halaman_input_data_spk.jpg','halaman_perangkingan_calon_spk.jpg'],
        url        : 'https://github.com/azhry/mfep-wp-web'
      },
      {
      	id    : 4,
      	judul : "PERAMALAN PENDERITA TB DENGAN FUZZY TIME SERIES",
        keterangan : "Web | PHP, Codeiginiter, HTML, JavaScript, CSS, MySQL",
        deskripsi  : 'Aplikasi ini juga bagian dari proyek saya yang berfokus untuk mengerjakan aplikasi untuk penelitian. Aplikasi ini bekerja dengan memanfaatkan data historis penederita TB(tuberkolosis) yang telah diinputkan sebelumnya kemudian aplikasi akan melakukan peramalan penederita TB tahun berikutnya. Sebagaimana penelitian , aplikasi ini bertujuan untuk mengukur tingkat keakuratan metode fuzzy time series dalam meramalkan tingkat penderita TB.',
        foto       : ['halaman_peramalan_TB.jpg','halaman_jumlah_penederita_TB.jpg'],
        url        : 'https://github.com/azhry/tb-fts'
      },
      {
         id    : 5,
         judul : "OPTICAL CHARACTER RECOGNITION(OCR) DENGAN BACKPROPAGATION(BP) DAN PROFILE PROJECTION PADA KARAKTER PLAT KENDARAAN",
         keterangan : "Dekstop | Java",
         deskripsi  : 'Aplikasi ini digunakan sebagai proyek penelitian. Aplikasi ini bertujuan untuk mengukur keakuratan metode jaringan syaraf tiruan (BP) untuk klasifikasi plat kendaraan berdasarkan gambar plat kendaraan dari hasil segmentasi karakter menggunakan profile projection.',
         foto  :['pelatihan_ocr.jpg','pengujian_ocr.jpg'],
         url   : 'https://github.com/Mhakimamransyah/ocr'
      },
      {
         id    : 6,
         judul : "APLIKASI DATA MINING MENGGUNAKAN NAIVE BAYES DAN C4.5 UNTUK KLASIFIKASI",
         keterangan : "Dekstop | Java, MySQL",
         deskripsi : 'Aplikasi ini juga digunakan untuk keperluan proyek penelitian mahasiswa. Aplikasi ini bertjuan untuk mengukur keakuratan algoritma klasifikasi Naive Bayes dan C4.5 untuk mengklasifikasikan data. Data yang digunakan bisa apa saja tidak terikat dengan objek tertentu.',
         foto  :['nbc45.jpg'],
         url   : 'https://github.com/Mhakimamransyah/nb-c45'
      }
   ];
}])
