import React from 'react';
import { Aluno, Description, Ranking, Titulo } from './styles';

export default function RankingList() {
  const alunos = [
    {
      id: '001',
      name: 'Pedro Torres',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/425209598_704467895216853_5265311397544452028_n.jpg?ccb=11-4&oh=01_Q5AaIJ_vk4p8oZyA_y-W-QIO4XBNB01QmrYPYaVHVGzMzXot&oe=663F9E83&_nc_sid=e6ed6c&_nc_cat=103',
      balance: 14215,
    },
    {
      id: '002',
      name: 'Lizandra Thais',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/426084460_2048961428831699_8387912616449425396_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIL2E5J3f-LCp8nF5Y6wZc34Wphj1vYDt6A1Ep-lFigW5&oe=663FA0F3&_nc_sid=e6ed6c&_nc_cat=107',
      balance: 10742,
    },
    {
      id: '003',
      name: 'Eliabe Mendes',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/368257308_1046262436547520_2399578080419219310_n.jpg?ccb=11-4&oh=01_Q5AaIK4V0UhKB3D-CzQDHa42en5ihh7S-yzwe-2rkYpSkqFI&oe=663FA6B0&_nc_sid=e6ed6c&_nc_cat=107',
      balance: 13370,
    },
    {
      id: '004',
      name: 'Lucila Poggi',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/428345067_704847521649563_7423322919207469726_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIOPc5yUqWusMBXfq36xz-1wMQhM82cRY9cAed1BMIUWz&oe=663FB314&_nc_sid=e6ed6c&_nc_cat=109',
      balance: 13991,
    },
    {
      id: '005',
      name: 'Jonas William',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/402347796_733111458376952_7072831213339389574_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIOAIL78Y3-heMfWlmP2BMSOHE44VgCMxveKe8iRrqPRA&oe=663F7B6E&_nc_sid=e6ed6c&_nc_cat=104',
      balance: 11060,
    },
    {
      id: '006',
      name: 'Rafael Machado',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/435569851_1960905184305241_8848463802538910888_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIHWdhOePK0p4LCp68Shd2PnsK6tgcqr-JzZOih8b4euE&oe=663FACA0&_nc_sid=e6ed6c&_nc_cat=104',
      balance: 10917,
    },
    {
      id: '007',
      name: 'Lucas Almeida',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/429497969_7870938352973241_7865509025477172426_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIKhe-otTe6thpNoTwTWsU59zyHy6PhOb8FbzPO-DR1qZ&oe=663F95E0&_nc_sid=e6ed6c&_nc_cat=105',
      balance: 10604,
    },
    {
      id: '008',
      name: 'Ana Cíntia',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/417024092_1089483665466961_429168096492195373_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIIqNncsB0yGrTofz2iISl2gmn6hi0bbzojyqipoXVaDB&oe=663F97AF&_nc_sid=e6ed6c&_nc_cat=103',
      balance: 10297,
    },
    {
      id: '009',
      name: 'Dominick',
      image:
        'https://howardgardnerschool.com/wp-content/uploads/2022/05/generic-avatar.jpg',
      balance: 8869,
    },
    {
      id: '010',
      name: 'Annita',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/423687103_7001235649964151_2342606532501351151_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIFlw0VlRNqJD8MaUlRYajsbjOPl59mhk7IBnJ6dtpaUQ&oe=663F9B0E&_nc_sid=e6ed6c&_nc_cat=105',
      balance: 7846,
    },
    {
      id: '011',
      name: 'Gabriel de Holanda',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/431230736_985647523214385_3486569389666509962_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIP8d9Bq4DrxKn3elPMY2ptKCgAw1L8YFjz0ziq_lD8yz&oe=663FAF3E&_nc_sid=e6ed6c&_nc_cat=109',
      balance: 7587,
    },
    {
      id: '012',
      name: 'Jezreel Ferreira',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/425174824_1062489451494918_5427601986101562483_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaINBcwD78T9whfT4ShbqVpRLtHY25SSaREC8RwCorZIl_&oe=663FB2D6&_nc_sid=e6ed6c&_nc_cat=102',
      balance: 7540,
    },
    {
      id: '013',
      name: 'Jaysa Amâncio',
      image:
        'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/427314102_1121898825794651_3875235068893117908_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIBsUS9WmgyQj1XERHxA227QFcQbXVpXlCGwZj_7Y-e95&oe=663F97A7&_nc_sid=e6ed6c&_nc_cat=103',
      balance: 6246,
    },
  ];

  const alunosOrdenados = [...alunos].sort((a, b) => b.balance - a.balance);

  return (
    <>
      <Titulo>🕹️ Ranking - ApologetiQuiz ✅</Titulo>
      <Ranking>
        <div>
          {alunosOrdenados.map((aluno, index) => (
            <Aluno key={aluno.id}>
              <img src={aluno.image} />
              <Description>
                <p>#{index + 1}</p>
                <p>{aluno.name}</p>
                <p>Pontuação: {aluno.balance}</p>
              </Description>
            </Aluno>
          ))}
        </div>
      </Ranking>
    </>
  );
}
