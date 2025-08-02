import java.util.*;

public class Problem4 {

    public static void main(String[] args) {
        String deliveriesFile = "/home/saikumar-palla/Desktop/IPLjava/src/deliveries.csv";
        printTop10EconomicalBowlers(deliveriesFile);
    }

    public static void printTop10EconomicalBowlers(String deliveriesFile) {
        try {
            CSVToArray csvReader = new CSVToArray();
            List<String> deliveries = csvReader.readCsv(deliveriesFile);
            Map<String, int[]> bowlerStats = new HashMap<>();

            for (int i = 1; i < deliveries.size(); i++) {
                String[] data = deliveries.get(i).split(",");
                if (data.length < 11) {
                    continue;
                }

                String bowler = data[8]; 
                int balls = Integer.parseInt(data[9]);  
                int runs = Integer.parseInt(data[10]);  

                bowlerStats.putIfAbsent(bowler, new int[2]); 
                bowlerStats.get(bowler)[0] += runs;  
                bowlerStats.get(bowler)[1] += balls; 
            }

            List<Map.Entry<String, Double>> bowlerEconomies = new ArrayList<>();
            for (Map.Entry<String, int[]> entry : bowlerStats.entrySet()) {
                String bowler = entry.getKey();
                int[] stats = entry.getValue();
                double economyRate = (stats[0] / (double) stats[1]) * 6;
                bowlerEconomies.add(new AbstractMap.SimpleEntry<>(bowler, economyRate));
            }

            bowlerEconomies.sort(Comparator.comparingDouble(Map.Entry::getValue));
            System.out.println("Top 10 Economical Bowlers:");
            for (int i = 0; i < 10 && i < bowlerEconomies.size(); i++) {
                Map.Entry<String, Double> entry = bowlerEconomies.get(i);
                System.out.println(entry.getKey() + " - Economy Rate: " + entry.getValue());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}


// Number of matches played per year of all the years in IPL.

private static void calculateMatchesPlayedPerYear(List<Match> matches) {
    Map<Integer, Integer> matchesPlayedBySeason = new TreeMap<>();

    for (Match match : matches) {
        matchesPlayedBySeason.put(match.getSeason(), matchesPlayedBySeason.getOrDefault(match.getSeason(), 0) + 1);
    }
    System.out.println(matchesPlayedBySeason);
}


// Number of matches won of all teams over all the years of IPL.

private static void calculateTeamWinsBySeason(List<Match> matches) {
    Map<Integer, Map<String, Integer>> winsBySeason = new TreeMap<>();

    for (Match match : matches) {
        winsBySeason.putIfAbsent(match.getSeason(), new HashMap<>());
        Map<String, Integer> teamWins = winsBySeason.get(match.getSeason());
        String winningTeam = match.getWinner();

        if (!winningTeam.isEmpty()) {
            teamWins.put(winningTeam, teamWins.getOrDefault(winningTeam, 0) + 1);
        }
    }
    System.out.println(winsBySeason);
    
}


// For the year 2016 get the extra runs conceded per team.

private static void calculateExtrasConcededInYear(List<Match> matches, List<Delivery> deliveries, int year) {
    Set<Integer> matchIds = new HashSet<>();
    for (Match match : matches) {
        if (match.getSeason() == year) {
            matchIds.add(match.getId());
        }
    }
    // System.out.println(matchIds);

    Map<String, Integer> teamExtras = new HashMap<>();

    for (Delivery delivery : deliveries) {
        if (matchIds.contains(delivery.getMatchId())) {
            teamExtras.putIfAbsent(delivery.getBattingTeam(), 0);
            teamExtras.put(delivery.getBattingTeam(), teamExtras.get(delivery.getBattingTeam()) + delivery.getExtraRuns());
        }
    }

    for (var entry : teamExtras.entrySet()) {
        System.out.println("Team " + entry.getKey() + " extra runs: " + entry.getValue());
    }
}

private static void findHighestStrikeRateBatterInYear(List<Match> matches, List<Delivery> deliveries, int year) {
    Set<Integer> matchIds = new HashSet<>();
    for (Match match : matches) {
        if (match.getSeason() == year) {
            matchIds.add(match.getId());
        }
    }

    Map<String, int[]> batterStats = new HashMap<>();

    for (Delivery delivery : deliveries) {
        if (matchIds.contains(delivery.getMatchId())) {
            batterStats.putIfAbsent(delivery.getBatsman(), new int[2]);
            batterStats.get(delivery.getBatsman())[0] += delivery.getBatsmanRuns();
            batterStats.get(delivery.getBatsman())[1]++;
        }
    }

    double maxStrikeRate = -1;
    String topBatter = "";

    for (var entry : batterStats.entrySet()) {
        String batter = entry.getKey();
        int runs = entry.getValue()[0];
        int balls = entry.getValue()[1];
        double strikeRate = (balls > 0) ? (runs * 100.0 / balls) : 0;

        if (strikeRate > maxStrikeRate) {
            maxStrikeRate = strikeRate;
            topBatter = batter;
        }
    }

    System.out.println("Highest Strike Rate in " + year + ": " + topBatter + " (" + maxStrikeRate + ")");
}

private static void findTopBowlerBatterDismissals(List<Delivery> deliveries) {
    Map<String, Integer> dismissals = new HashMap<>();

    for (Delivery delivery : deliveries) {
        if (!delivery.getPlayerDismissed().isEmpty()) {
            String pair = delivery.getBowler() + "->" + delivery.getPlayerDismissed();
            dismissals.put(pair, dismissals.getOrDefault(pair, 0) + 1);
        }
    }

    dismissals.entrySet().stream()
            .sorted((a, b) -> Integer.compare(b.getValue(), a.getValue()))
            .limit(5)
            .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue() + " dismissals"));
}

private static void findMostEconomicalBowlerInYear(List<Match> matches, List<Delivery> deliveries, int year) {
    Set<Integer> matchIds = new HashSet<>();
    for (Match match : matches) {
        if (match.getSeason() == year) {
            matchIds.add(match.getId());
        }
    }

    Map<String, int[]> bowlerStats = new HashMap<>();

    for (Delivery delivery : deliveries) {
        if (matchIds.contains(delivery.getMatchId())) {
            bowlerStats.putIfAbsent(delivery.getBowler(), new int[2]);
            bowlerStats.get(delivery.getBowler())[0] += delivery.getTotalRuns();
            bowlerStats.get(delivery.getBowler())[1]++;
        }
    }

    double minEconomy = Double.MAX_VALUE;
    String topBowler = "";

    for (var entry : bowlerStats.entrySet()) {
        String bowler = entry.getKey();
        int runs = entry.getValue()[0];
        int balls = entry.getValue()[1];
        double economyRate = (balls > 0) ? (runs * 6.0 / balls) : Double.MAX_VALUE;

        if (economyRate < minEconomy) {
            minEconomy = economyRate;
            topBowler = bowler;
        }
    }

    System.out.println("Most Economical Bowler in " + year + ": " + topBowler + " (" + minEconomy + ")");
}


System.out.println("1. Number of matches played per year of all the years in IPL.");
        calculateMatchesPlayedPerYear(matches);

        System.out.println("\n2. Number of matches won by all teams per year in IPL.");
        calculateTeamWinsBySeason(matches);
        
        System.out.println("\n3. For the year 2016 get the extra runs conceded per team.");
        calculateExtrasConcededInYear(matches, deliveries, 2016);
        
        System.out.println("\n4. For the year 2015 get the top economical bowlers.");
        findMostEconomicalBowlerInYear(matches, deliveries, 2015);
        
        System.out.println("\n5. Find the highest number of times one player has been dismissed by another player.");
        findTopBowlerBatterDismissals(deliveries);
                
        System.out.println("\n6. For the year 2012 find the batter with the highest strike rate (Minimum of 20 balls faced).");
        findHighestStrikeRateBatterInYear(matches, deliveries, 2012);
                
