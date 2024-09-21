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
        'bank',
        'status',
        'nama',
        'web',
        'supplier',
        'no_rek',
        'nama_ibu',
        'email',
        'password',
        'no_hp',
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
        'masa_berlaku_atm',
        'keterangan',
        'user_my_bca',
        'password_my_bca',
        'pin_transaksi',
        'tanggal_terima',
        'coorporate_id',
        'coorporate',
        'id_coop',
        'foto_ktp',
        'foto_kartu_atm',
        'foto_token',
        'foto_buku_tabungan'
    ];
}
