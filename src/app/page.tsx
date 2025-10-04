'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    namaProyek: '',
    deskripsi: '',
    jenisPengguna: '',
    durasi: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/backend/proyek', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      console.log('Response:', result);
      alert('Data berhasil dikirim ke backend!');
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengirim data!');
    }
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8 w-full max-w-4xl">
        {/* Main Hello World Text */}
        <h1 className="text-6xl md:text-8xl font-bold text-black">
          Hello World!
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 font-light">
          Welcome To My Website
        </p>

        {/* Project Form */}
        <div className="mt-16 w-full max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Formulir Proyek
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nama Proyek */}
            <div>
              <label htmlFor="namaProyek" className="block text-sm font-medium text-gray-700 mb-2">
                Nama Proyek
              </label>
              <input
                type="text"
                id="namaProyek"
                name="namaProyek"
                value={formData.namaProyek}
                onChange={handleInputChange}
                placeholder="Contoh: Carbon Dashboard"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                required
              />
            </div>

            {/* Deskripsi */}
            <div>
              <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi
              </label>
              <textarea
                id="deskripsi"
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleInputChange}
                placeholder="Berikan penjelasan singkat tentang tujuan atau fungsi utama proyek ini..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900 resize-vertical"
                required
              />
            </div>

            {/* Jenis Pengguna */}
            <div>
              <label htmlFor="jenisPengguna" className="block text-sm font-medium text-gray-700 mb-2">
                Jenis Pengguna
              </label>
              <select
                id="jenisPengguna"
                name="jenisPengguna"
                value={formData.jenisPengguna}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                required
              >
                <option value="">Pilih jenis pengguna</option>
                <option value="Admin">Admin</option>
                <option value="Mahasiswa">Mahasiswa</option>
                <option value="Staff Kampus">Staff Kampus</option>
                <option value="Dosen">Dosen</option>
              </select>
            </div>

            {/* Durasi */}
            <div>
              <label htmlFor="durasi" className="block text-sm font-medium text-gray-700 mb-2">
                Durasi
              </label>
              <input
                type="text"
                id="durasi"
                name="durasi"
                value={formData.durasi}
                onChange={handleInputChange}
                placeholder="Contoh: 3 bulan"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                required
              />
            </div>

            {/* Tombol Kirim */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
