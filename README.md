# TTS - Bakar

Projek PKWU SMK Telkom Malang 2020, "Bakar" by TTS

## Petunjuk Penggunaan

### Clone Project

1. Fork dulu repo ini
2. git clone "link repo ini setelah di fork"
3. git checkout develop (untuk berpindah ke branch develop [WAJIB!])

### Jika ingin buat feature baru

1. git checkout develop
2. git checkout -b feature_login (login diganti sesuai feature yg ditambahkan)
3. Mulai coding
4. [setelah selesai] git pull origin develop (untuk mengupdate branch agar tidak crash dengan branch lain)
5. git checkout develop
6. git merge feature_login (nama feature harus sama dengan branch feature yg tadi ditambahkan)

### Jika ingin melanjutkan branch feature dari yg sudah ada

1. git checkout develop
2. git checkout feature_login (login diganti sesuai branch feature yg sudah ada)
3. git pull origin develop (untuk mengupdate branch agar tidak crash dengan branch lain)
4. Mulai coding / megganti codingan
5. [setelah selesai] git pull origin develop (untuk mengupdate branch agar tidak crash dengan branch lain)
6. git checkout develop
7. git merge feature_login (nama feature harus sama dengan branch feature yg tadi diganti)

## Learn More

https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
