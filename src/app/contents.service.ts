import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentsService {
  constructor() {}

  getWhoWeAre(): any {
    let whoWeAre = [
      {
        type: 'Sites',
        projectedNumber:500,
        iconSrc : "location.png"
        },
      {
        type: 'Clients',
        projectedNumber:200,
        iconSrc : "clients.png"
        },
      {
        type: 'Branches',
        projectedNumber:30,
        iconSrc : "branch.png"
        },
      {
        type: 'Employees',
        projectedNumber:2800,
        iconSrc : "employee.png"
      },
    ];
    return whoWeAre;
  }

  getTeam(): any {
    let team = [
      {
        name: 'A',
        details:
          'Auries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release',
      },
      {
        name: 'B',
        details:
          'Buries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release',
      },
      {
        name: 'C',
        details:
          'Curies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release',
      },
    ];

    return team;
  }

  getOurServices():any{
    let services = [
      {
        service:"Integrated Security",
        details: "We are one of the leading security service provider and have been engaged in providing security services in several small and large scale industries. We have huge manpower, expert and professional staff who are trained as per industrial requirements and we are renowned in providing these services throughout the nation.",
        icon:"icons8-delete-shield.gif"
       },
       {
        service:"Facility Management",
        details:"In Facility Management Services we have spread our wings across nation.Our focus lies in providing gender equal opportunities, provide efficient, trained and productive human resource services to Industry.",
        icon:"icons8-vacuuming-100.png"
       },
       {
        service:"Supply Chain",
        details:"ESS is one of India's innovative logistics companies that are aimed at delivering world class logistics services to their clients.We at ESS make all the possibilities to stand behind the customer solution for all of the supply chain operations. ESS have an enviable reputation working with many leading companies on supply chain and logistics projects.",
        icon:"icons8-truck-weight-max-loading-100.png"
       },
      //  {
      //   service:"Training",
      //   details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore magni, consectetur vero sint facilis ratione, corrupti quis reprehenderit, dolorem quibusdam modi iste dolores magnam officiis! Saepe unde beatae ea minus.",
      //   icon:"icons8-training-100.png"
      //  }
    ]
    return services
  }

  getPortfolio():any{
    let portfolio = [
      {
        name: 'Adani',
        logo:'adani.png'
      },
      {
        name: 'Aircel',
        logo:'aircel.svg'
      },
      {
        name: 'Allahabad Bank',
        logo:'Allahabad_Bank_Logo.svg'
      },
      {
        name: 'Bank Of Baroda',
        logo:'BankOfBarodaLogo.svg'
      },
      {
        name: 'Indian Overseas Bank',
        logo:'Indian_Overseas_Bank_Logo.svg'
      },
      {
        name: 'JUCBL',
        logo:'jucbl-logo.png'
      },
      {
        name: 'Lafarge',
        logo:'Lafarge.svg'
      },
      {
        name: 'LIC',
        logo:'Life_Insurance_Corporation_of_India_(logo).svg'
      },
      {
        name: 'Reliance',
        logo:'Reliance.svg'
      },
      {
        name: 'SBI',
        logo:'State_Bank_of_India_logo.svg'
      },
      {
        name: 'Wipro',
        logo:'wipro.svg'
      },

      {
        name:'Amazon',
        logo:'Amazon_logo.svg'
      }
    ];

    return portfolio;
  }
}
