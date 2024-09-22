<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rekenings', function (Blueprint $table) {
        $table->id();
            $table->timestamps();
            $table->string('bank')->nullable(); 
            $table->string('status')->nullable();
            $table->string('nama')->nullable();
            $table->string('web')->nullable();
            $table->string('supplier')->nullable();
            $table->string('no_rek')->nullable();
            $table->string('nama_ibu')->nullable();
            $table->string('email')->nullable();
            $table->string('password')->nullable();
            $table->string('no_hp')->nullable();
            $table->string('user_ib')->nullable();
            $table->string('pin_ib')->nullable();
            $table->string('kode_mb')->nullable();
            $table->string('password_transaksi')->nullable();
            $table->string('pin_mb')->nullable();
            $table->string('pin_atm')->nullable();
            $table->string('skn')->nullable();
            $table->string('pin_skn')->nullable();
            $table->string('jenis_atm')->nullable();
            $table->string('no_kartu_atm')->nullable();
            $table->string('cvv')->nullable();
            $table->string('masa_berlaku_atm')->nullable();
            $table->string('keterangan')->nullable();
            $table->string('user_my_bca')->nullable();
            $table->string('password_my_bca')->nullable();
            $table->string('pin_transaksi')->nullable();
            $table->string('tanggal_terima')->nullable();
            $table->string('coorporate_id')->nullable();
            $table->string('coorporate')->nullable();
            $table->string('id_coop')->nullable();
            $table->string('foto_ktp')->nullable();
            $table->string('foto_kartu_atm')->nullable();
            $table->string('foto_token')->nullable();
            $table->string('foto_buku_tabungan')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rekenings');
    }
};
