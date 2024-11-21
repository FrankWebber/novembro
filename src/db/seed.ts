import { db } from './index';
import { students, schools, directors, teachers, guardians, councils, classes, lessons, studentClasses, studentLessons, notifications } from './schema';
import { sql } from 'drizzle-orm';

// Função para popular as tabelas do banco de dados
async function seedDatabase() {
  try {
    // Limpando os dados das tabelas na ordem correta (para respeitar dependências de chaves estrangeiras)
    await db.delete(studentLessons).execute();
    await db.delete(studentClasses).execute();
    await db.delete(lessons).execute();
    await db.delete(classes).execute();
    await db.delete(notifications).execute();
    await db.delete(guardians).execute();
    await db.delete(students).execute();
    await db.delete(teachers).execute();
    await db.delete(directors).execute();
    await db.delete(schools).execute();
    await db.delete(councils).execute();

    // Inserindo dados em councils (Conselhos)
    await db.insert(councils).values({
      id: 'council1',
      name: 'Conselho Escolar',
      address: 'Rua Belford Roxo c/ Rua Papucaia, S/N',
      phone: '92 98123-4567',
      email: 'conselho@escola.com',
      coordinator: 'Joana Silva',
    });

    // Inserindo dados em schools (Escolas)
    await db.insert(schools).values({
      id: '6522',
      nome: 'Escola Estadual Prof Demostenes Belduque Araujo Travessa',
      nomeReduzido: 'EE DEMOSTENES BELDUQUE',
      codigoInep: '13095099',
      municipio: 'Manaus',
      bairro: 'Jorge Teixeira IV',
      logradouro: 'Rua Belford Roxo c/ Rua Papucaia',
      numero: 'S/N',
      distrito: 'Coord. Distrital 05',
      cep: '69088139',
      latitude: '-3.0300750',
      longitude: '-59.9304810',
      telefone1: '92 991629469',
      telefone2: '92 992267626',
      ramalGestor: '991629469',
      telefoneGestor: '992442422',
      ramalSecretaria: '992267626',
      telefoneSecretaria: '993492634',
      email: 'eeprofdemostenestravessa@seduc.net',
      diretor: 'Elizandra Vieira Nunes',
      secretario: 'Alexandra Ramos Santos da Silva',
    });

    // Inserindo dados em directors (Diretores)
    await db.insert(directors).values({
      id: '1983717B',
      name: 'Elizandra Vieira Nunes',
      ils: '2008 457',
      registrationNumber: '01.198371-7B',
      workStatus: 'Exercício Regular',
      administrativeUnit: 'ESC.EST.DEMOSTENES B.A.TRAVES.',
      position: 'Professor PF40.ESP-III',
      schoolCode: '6522',
      schoolName: 'EE DEMOSTENES BELDUQUE',
      municipality: 'Manaus',
      assignmentStatus: 'Ativo',
      function: 'Diretor',
      startAssignment: '2024-01-08',
      endAssignment: '2024-12-31',
      inclusionDate: '2024-02-19',
      modificationDate: '2024-02-19',
      shift: 'Vespertino',
      workload: 20,
      habilitation: 'Pedagogia - Licenciatura',
      cpf: '704.554.142-20',
    });

    // Inserindo dados em teachers (Professores)
    await db.insert(teachers).values([
      {
        id: 'teacher1',
        name: 'Reginaldo de Souza Lira',
        ilsNumber: '2019 3693',
        registrationNumber: '01.143030-0D',
        status: 'Ativo',
        administrativeUnit: 'ESC.EST.DEMOSTENES B.A.TRAVES.',
        role: 'Professor PF40.LPL-IV',
        schoolCode: '6522',
        schoolName: 'EE DEMOSTENES BELDUQUE',
        municipality: 'Manaus',
        assignmentStatus: 'Ativo',
        function: 'Professor',
        startAssignment: '2024-01-02',
        endAssignment: '2024-12-31',
        inclusionDate: '2023-12-21',
        modificationDate: '2024-01-11',
        shift: 'Vespertino',
        workload: 40,
        cpf: '320.424.002-97',
      },
      {
        id: 'teacher2',
        name: 'Jasson de Miranda Silva',
        ilsNumber: '2015 2315',
        registrationNumber: '01.233439-9A',
        status: 'Ativo',
        administrativeUnit: 'ESC.EST.DEMOSTENES B.A.TRAVES.',
        role: 'Professor PF40.LPL-IV',
        schoolCode: '6522',
        schoolName: 'EE DEMOSTENES BELDUQUE',
        municipality: 'Manaus',
        assignmentStatus: 'Ativo',
        function: 'Professor',
        startAssignment: '2024-01-02',
        endAssignment: '2024-12-31',
        inclusionDate: '2023-12-21',
        modificationDate: '2024-01-11',
        shift: 'Vespertino',
        workload: 40,
        cpf: '783.944.492-04',
      },
    ]);

    // Inserindo dados em classes (Turmas)
    await db.insert(classes).values({
      id: 3,
      name: '9 Ano - 03 - Vespertino',
      grade: '9º Ano',
      schoolId: '6522',
      turn: 'Vespertino',
    });

    // Inserindo dados em students (Estudantes)
    await db.insert(students).values({
      id: '2037599-9',
      name: 'Sarah Rackel Ferreira Lima',
      registrationNumber: '2037599-9',
      studentClass: '9 Ano',
      dateOfBirth: '2009-09-25',
      sex: 'F',
      race: 'PARDA',
      motherName: 'Luciana Ferreira Lima',
      fatherName: 'Mauro Frank Lima de Lima',
      addressType: 'Rua',
      address: 'Pau D Arco',
      addressNumber: '149',
      cep: '69088-254',
      municipality: 'Manaus',
      neighborhood: 'Jorge Teixeira',
      phone1: '92 985880080',
      phone2: '92 994136314',
      emailGoogle: 'sarahlr1@seducam.g12.br',
      nationality: 'Brasileiro Nato',
      ufOfBirth: 'AM',
      cityOfBirth: 'Autazes',
      cpf: '02991935278',
      maritalStatus: 'Solteiro',
      bloodType: 'O+',
      susNumber: '704107133983571',
      locationTrackingEnabled: false,
    });

    // Inserindo dados em guardians (Responsáveis)
    await db.insert(guardians).values({
      id: 'mauro-frank-1',
      name: 'Mauro Frank Lima de Lima',
      relationship: 'Pai',
      studentId: '2037599-9',
      phone: '92 994136314',
      email: 'maurofrank@gmail.com',
    });

    // Relacionando estudante à turma (studentClasses)
    await db.insert(studentClasses).values({
      studentId: '2037599-9',
      classId: 3,
    });

    // Inserindo dados em lessons (Aulas)
    await db.insert(lessons).values([
      {
        id: 1,
        subject: 'Educação Física',
        dayOfWeek: 'segunda-feira',
        startTime: '13:00',
        endTime: '13:45',
        classId: 3,
        teacherId: 'teacher1',
      },
      {
        id: 2,
        subject: 'Matemática',
        dayOfWeek: 'terça-feira',
        startTime: '13:45',
        endTime: '14:30',
        classId: 3,
        teacherId: 'teacher2',
      },
    ]);

    // Relacionando estudante às aulas (studentLessons)
    await db.insert(studentLessons).values([
      { studentId: '2037599-9', lessonId: 1 },
      { studentId: '2037599-9', lessonId: 2 },
    ]);

    // Inserindo dados em notifications (Notificações)
    await db.insert(notifications).values([
      {
        id: 1,
        studentId: '2037599-9',
        recipientType: 'Pai',
        recipientId: 'mauro-frank-1',
        message: 'Sua filha, Sarah Rackel, não compareceu à aula de Matemática.',
        status: 'Pendente',
        createdAt: new Date(),
      },
    ]);

    console.log('Banco de dados populado com sucesso!');
  } catch (error) {
    console.error('Erro ao popular banco de dados:', error);
  } finally {
    db.$client.end(); // Fecha a conexão com o banco
  }
}

// Executa o script
seedDatabase();
