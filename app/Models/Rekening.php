<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rekening extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'nama',
        'bank',
        'status',
        'supplier',
        'cabang',
        'no_rek',
        'nama_ibu',
        'no_hp',
        'email',
        'password',
        'user_ib',
        'pin_ib',
        'kode_mb',
        'password_transaksi',
        'pin_mb',
        'pin_atm',
        'skn',
        'pin_skn',
        'jenis_atm',
        'no_kartu_atm',
        'cvv',
        'valid_simcard',
        'user_my_bca',
        'password_my_bca',
        'pin_transaksi',
        'keterangan',
        'tanggal_mulai',
        'tanggal_akhir',
        'coorporate_id',
        'coorporate',
        'id_coop',
        'masa_berlaku_atm',
        'foto_ktp',
        'foto_kartu_atm',
        'foto_kartu_kk',
        'foto_buku_tabungan'
    ];
}
