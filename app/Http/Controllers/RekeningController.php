<?php

namespace App\Http\Controllers;

use App\Models\Rekening;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RekeningController extends Controller
{
  // Global Variabel
  protected $attributes = [
    'DataRekening' => [
      ['data' => 'nama', 'type' => 'text', 'header' => 'Nama'],
      ['data' => 'bank', 'type' => 'select', 'options' => ['BCA', 'Mandiri', 'BNI', 'BRI', 'CIMB', 'JAGO', 'Jenius'], 'header' => 'Bank'],
      ['data' => 'status', 'type' => 'select', 'options' => ['Active', 'Stock', 'Sakit', 'Closed'], 'header' => 'Status'],
      ['data' => 'supplier', 'type' => 'text', 'header' => 'Supplier'],
      ['data' => 'cabang', 'type' => 'text', 'header' => 'Cabang'],
      ['data' => 'no_rek', 'type' => 'text', 'header' => 'No. Rekening'],
      ['data' => 'nama_ibu', 'type' => 'text', 'header' => 'Nama Ibu'],
      ['data' => 'no_hp', 'type' => 'number', 'header' => 'No. Hp'],
      ['data' => 'email', 'type' => 'email', 'header' => 'Email'],
      ['data' => 'password', 'type' => 'text', 'header' => 'Password'],
      ['data' => 'user_ib', 'type' => 'text', 'header' => 'User Internet Banking'],
      ['data' => 'pin_ib', 'type' => 'text', 'header' => 'Pin Internet Banking'],
      ['data' => 'kode_mb', 'type' => 'text', 'header' => 'Kode Akses Mobile Banking'],
      ['data' => 'password_transaksi', 'type' => 'text', 'header' => 'Password Transaksi'],
      ['data' => 'pin_mb', 'type' => 'text', 'header' => 'Pin Mobile Banking'],
      ['data' => 'pin_atm', 'type' => 'text', 'header' => 'Pin ATM'],
      ['data' => 'skn', 'type' => 'text', 'header' => 'Serial Key Number'],
      ['data' => 'pin_skn', 'type' => 'text', 'header' => 'Pin Serial Key Number'],
      ['data' => 'jenis_atm', 'type' => 'text', 'header' => 'Jenis ATM'],
      ['data' => 'no_kartu_atm', 'type' => 'text', 'header' => 'No. Kartu Atm'],
      ['data' => 'cvv', 'type' => 'text', 'header' => 'CVV'],
      ['data' => 'valid_simcard', 'type' => 'date', 'header' => 'Valid SIM CARD']
    ],
    'MyBCA' => [
      ['data' => 'user_my_bca', 'type' => 'text', 'header' => 'User My BCA'],
      ['data' => 'password_my_bca', 'type' => 'text', 'header' => 'Password My BCA'],
      ['data' => 'pin_transaksi', 'type' => 'text', 'header' => 'Pin Transaksi'],
      ['data' => 'keterangan', 'type' => 'text', 'header' => 'Keterangan'],
      ['data' => 'tanggal_mulai', 'type' => 'date', 'header' => 'Tanggal Mulai'],
      ['data' => 'tanggal_akhir', 'type' => 'date', 'header' => 'Tanggal Akhir'],
    ],
    'Bisnis' => [
      ['data' => 'coorporate_id', 'type' => 'text', 'header' => 'Coorporate ID'],
      ['data' => 'coorporate', 'type' => 'text', 'header' => 'Coorporate'],
      ['data' => 'id_coop', 'type' => 'text', 'header' => 'ID'],
      ['data' => 'masa_berlaku_atm', 'type' => 'date', 'header' => 'Masa Berlaku ATM'],
      ['data' => 'foto_ktp', 'type' => 'file', 'header' => 'Foto KTP'],
      ['data' => 'foto_kartu_atm', 'type' => 'file', 'header' => 'Foto Kartu ATM'],
      ['data' => 'foto_kartu_kk', 'type' => 'file', 'header' => 'Foto kartu KK'],
      ['data' => 'foto_buku_tabungan', 'type' => 'file', 'header' => 'Foto Buku Tabungan']
    ],
  ];

  public function index()
  {
    $rekenings = Rekening::latest()->paginate(50);

    return inertia('DataRekening', [
      'rekenings' => $rekenings,
      'attributes' => $this->attributes,
    ]);
  }

  public function create()
  {
    return inertia('TambahDataUser', [
      'attributes' => $this->attributes
    ]);
  }

  public function store(Request $request)
  {
    $data = $request->validate([
      'nama' => 'nullable|string|max:255',
      'bank' => 'nullable|string|in:BCA,Mandiri,BNI,BRI,CIMB,JAGO,Jenius',
      'status' => 'nullable|string|in:Active,Stock,Sakit,Closed',
      'supplier' => 'nullable|string|max:255',
      'cabang' => 'nullable|string|max:255',
      'no_rek' => 'nullable|string|max:255',
      'nama_ibu' => 'nullable|string|max:255',
      'no_hp' => 'nullable|string|max:255',
      'email' => 'nullable|email|max:255',
      'password' => 'nullable|string|max:255',
      'user_ib' => 'nullable|string|max:255',
      'pin_ib' => 'nullable|string|max:255',
      'kode_mb' => 'nullable|string|max:255',
      'password_transaksi' => 'nullable|string|max:255',
      'pin_mb' => 'nullable|string|max:255',
      'pin_atm' => 'nullable|string|max:255',
      'skn' => 'nullable|string|max:255',
      'pin_skn' => 'nullable|string|max:255',
      'jenis_atm' => 'nullable|string|max:255',
      'no_kartu_atm' => 'nullable|string|max:255',
      'cvv' => 'nullable|string|max:255',
      'valid_simcard' => 'nullable|date',
      'user_my_bca' => 'nullable|string|max:255',
      'password_my_bca' => 'nullable|string|max:255',
      'pin_transaksi' => 'nullable|string|max:255',
      'keterangan' => 'nullable|string|max:255',
      'tanggal_mulai' => 'nullable|date',
      'tanggal_akhir' => 'nullable|date|after:tanggal_mulai',
      'coorporate_id' => 'nullable|string|max:255',
      'coorporate' => 'nullable|string|max:255',
      'ID' => 'nullable|string|max:255',
      'masa_berlaku_atm' => 'nullable|date',
      'foto_ktp' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
      'foto_kartu_atm' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
      'foto_kartu_kk' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
      'foto_buku_tabungan' => 'nullable|image|mimes:jpeg,jpg,png|max:2048'
    ]);

    if ($request->hasFile('foto_ktp')) {
      $data['foto_ktp'] = $request->file('foto_ktp')->store("foto", 'public');
    }

    if ($request->hasFile('foto_kartu_atm')) {
      $data['foto_kartu_atm'] = $request->file('foto_kartu_atm')->store("foto", 'public');
    }

    if ($request->hasFile('foto_kartu_kk')) {
      $data['foto_kartu_kk'] = $request->file('foto_kartu_kk')->store("foto", 'public');
    }

    if ($request->hasFile('foto_buku_tabungan')) {
      $data['foto_buku_tabungan'] = $request->file('foto_buku_tabungan')->store("foto", 'public');
    }

    Rekening::create($data);

    return redirect()->route('rekening.index')->with('info', 'Data berhasil disimpan!');
  }

  public function show(Rekening $rekening)
  {
    return inertia('DetailUser', [
      'details' => $rekening,
      'attributes' => $this->attributes,
    ]);
  }

  public function edit(Rekening $rekening)
  {
    return inertia('EditUser', [
      'details' => $rekening,
      'attributes' => $this->attributes,
    ]);
  }

  public function update(Request $request, Rekening $rekening)
  {
    $data = $request->all();

    if ($request->hasFile('foto_ktp')) {
      if ($rekening->foto_ktp) {
        Storage::disk('public')->delete($rekening->foto_ktp);
      }
      $data['foto_ktp'] = $request->file('foto_ktp')->store("foto", 'public');
    }
    if ($request->hasFile('foto_kartu_atm')) {
      if ($rekening->foto_kartu_atm) {
        Storage::disk('public')->delete($rekening->foto_kartu_atm);
      }
      $data['foto_kartu_atm'] = $request->file('foto_kartu_atm')->store("foto", 'public');
    }
    if ($request->hasFile('foto_kartu_kk')) {
      if ($rekening->foto_kartu_kk) {
        Storage::disk('public')->delete($rekening->foto_kartu_kk);
      }
      $data['foto_kartu_kk'] = $request->file('foto_kartu_kk')->store("foto", 'public');
    }
    if ($request->hasFile('foto_buku_tabungan')) {
      if ($rekening->foto_buku_tabungan) {
        Storage::disk('public')->delete($rekening->foto_buku_tabungan);
      }
      $data['foto_buku_tabungan'] = $request->file('foto_buku_tabungan')->store("foto", 'public');
    }

    $rekening->update($data);

    return redirect()->route('rekening.index')->with('info', 'Data berhasil diperbarui!');
  }

  public function destroy(Rekening $rekening)
  {
    $nama = $rekening->nama;

    if ($rekening->foto_ktp) {
      Storage::disk('public')->delete($rekening->foto_ktp);
    }
    if ($rekening->foto_kartu_atm) {
      Storage::disk('public')->delete($rekening->foto_kartu_atm);
    }
    if ($rekening->foto_kartu_kk) {
      Storage::disk('public')->delete($rekening->foto_kartu_kk);
    }
    if ($rekening->foto_buku_tabungan) {
      Storage::disk('public')->delete($rekening->foto_buku_tabungan);
    }

    $rekening->delete();

    return redirect()->route('rekening.index')->with('info', "Data \"$nama\" berhasil dihapus!");
  }
}
