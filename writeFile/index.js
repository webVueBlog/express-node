
const fs = require('fs')
const path = require('path')

// ���ܻ�ʹ�õı�־�У�

// r+ ���ļ����ڶ�д��
// w+ ���ļ����ڶ�д��������λ���ļ��Ŀ�ͷ������ļ��������򴴽��ļ���
// a ���ļ�����д�룬������λ���ļ���ĩβ������ļ��������򴴽��ļ���
// a+ ���ļ����ڶ�д��������λ���ļ���ĩβ������ļ��������򴴽��ļ���

const p = path.resolve('1.txt')
const p1 = path.resolve('2.txt')

const content = 'aaa'

// fs.writeFile(p, content, { flag: 'a+' },  err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //�ļ�д��ɹ���
// })

// ��ո��ǣ�
fs.writeFile(p, content, { flag: 'r+' },  err => {
  if (err) {
    console.error(err)
    return
  }
  //�ļ�д��ɹ���
})

// ��ո��ǣ�
// fs.writeFile(p, content, { flag: 'w+' },  err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //�ļ�д��ɹ���
// })

