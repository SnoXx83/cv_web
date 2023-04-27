<?php

namespace App\Controller;

use App\Entity\Projet;
use App\Repository\ProjetRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends AbstractController
{
    #[Route('/project{id}', name: 'project')]
    public function index(ProjetRepository $projects, int $id, ProjetRepository $projectRepo): Response
    {
        $projects = $projectRepo->find($id);

        return $this->render('project/index.html.twig', [
            'projects' => $projects,
        ]);
    }
}
