import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export interface Pledge {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  createdAt: Date;
}

interface PledgeState {
  pledges: Pledge[];
  totalPledges: number;
  
  // Actions
  addPledge: (pledge: Pledge) => void;
  getPledgesByCity: (city: string) => Pledge[];
  getTotalPledgeCount: () => number;
}

export const usePledge = create<PledgeState>()(
  subscribeWithSelector((set, get) => ({
    pledges: [],
    totalPledges: 0,
    
    addPledge: (pledge) => {
      set((state) => ({
        pledges: [...state.pledges, pledge],
        totalPledges: state.totalPledges + 1
      }));
      
      console.log(`New pledge added: ${pledge.name} from ${pledge.city || 'Unknown location'}`);
    },
    
    getPledgesByCity: (city) => {
      const { pledges } = get();
      return pledges.filter(pledge => 
        pledge.city?.toLowerCase().includes(city.toLowerCase())
      );
    },
    
    getTotalPledgeCount: () => {
      const { pledges } = get();
      return pledges.length;
    }
  }))
);

// Subscribe to pledge changes for analytics
usePledge.subscribe(
  (state) => state.pledges.length,
  (pledgeCount) => {
    if (pledgeCount > 0) {
      console.log(`Total pledges now: ${pledgeCount}`);
      
      // Trigger celebration effects for milestones
      if (pledgeCount % 10 === 0) {
        console.log(`🎉 Milestone reached: ${pledgeCount} pledges!`);
      }
    }
  }
);
