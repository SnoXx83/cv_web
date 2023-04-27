<?php

namespace App\Controller;

use App\Entity\Projet;
use App\Repository\ProjetRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{
    #[Route('/portfolio', name: 'portfolio')]
    public function index(ProjetRepository $projects, ManagerRegistry $doctrine): Response
    {

        $projects = $doctrine->getRepository(Projet::class)->findAll();

        return $this->render('portfolio/index.html.twig', [
            'projects' => $projects,
        ]);
    }
}
