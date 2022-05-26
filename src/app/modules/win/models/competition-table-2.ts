export interface CompetitionTable2 {
    rank: string;
    tier: 'gold' | 'silver' | 'bronze' | 'purple' | 'teal';
    prizes: string;
    achievements: 2500 | 1250 | 1000 | 850 | 500;
    hasNft: boolean;
}